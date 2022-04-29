<template>
  <div>
    <!-- 表格数据 -->
    <TableData ref="table" :searchConfig="searchConfig" :tableConfig="tableConfig"> </TableData>
  </div>
</template>
<script>
import TableData from '@/components/TableData.vue'
// API
import { Blacklist, AmountClear } from "@/api/member"
export default {
  name: "Member",
  components: { TableData },
  data () {
    return {
      // 弹窗的标题
      title: "",
      // 表格配置
      tableConfig: {
        thead: [
          {
            label: "用户名",
            prop: "username",
            width: 150
          },
          {
            label: "真实姓名",
            prop: "truename",
            width: 150
          },
          {
            label: "租车订单",
            prop: "order",
            width: 150
          },
          {
            label: "违章预存金",
            prop: "illegalAmount",
            width: 200
          },
          {
            label: "押金",
            prop: "gilding"
          },
          {
            label: "余额",
            prop: "amount"
          },
          {
            label: "实名认证",
            prop: "check_real_name",
            width: 150
          },
          {
            label: "驾驶证",
            prop: "check_cars",
            width: 150
          },
          {
            label: "黑名单",
            prop: "blacklist",
            type: "switch",
            config: { id: 'memberId', status: 'blacklist' }
          },
          {
            label: '操作',
            type: 'operation',
            width: 300,
            // 需要删除按钮
            default: {
              delButton: true,
              delKey: "memberId"
            },
            // 配置编辑按钮
            buttonGroup: [
              {
                event: 'link',
                label: '详情',
                type: 'primary',
                name: 'MemberDetailed',
                queryKey: 'id',
                queryValue: "memberId"
              },
              { event: "link", label: "编辑", type: "primary", name: "MemberInfo", queryKey: "id", queryValue: "memberId" },
              { event: "button", label: "金额清空", type: "", handler: (data) => this.amountClear(data) },
            ]
          }
        ],
        url: 'memberList',
      },
      searchConfig: {
        formConfig: [
          {
            type: 'keyWord',
            label: '关键字',
            searchOptions: ["username", "truename", "card_id"]
          }
        ],
        config: {
          resetButton: true
        }
      },
      // row_id
      row_id: "",
      data_photo: {},
      // switch_disabled
      switch_disabled: "",
      // 弹窗标记
      dialog_show: false,
      form: {
        brand: "",
      }
    }
  },
  methods: {
    callbackComponent (params) {
      console.log(params)
      if (params.function) { this[params.function]() }
    },

    /** 黑名单 */
    updateBlacklist (status, data) {
      console.log(123)
      const requestData = {
        status,
        id: data.memberId
      }
      Blacklist(requestData).then(response => {
        const data = response
        this.$message({
          message: response.message,
          type: "success"
        })
      })
    },

    // 清空金额
    async amountClear (data) {
      await AmountClear({ member_id: data.memberId })
      this.$refs.table.requestData()
    }
  }
};
</script>
<style lass="scss" scoped>
.real-photo {
  display: inline;
  width: 30px;
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;
}
</style>