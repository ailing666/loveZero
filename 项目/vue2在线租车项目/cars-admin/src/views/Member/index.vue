<template>
  <div>
    <!-- 表格数据 -->
    <TableData ref="table" :searchConfig="searchConfig" :tableConfig="tableConfig">
      <template v-slot:realPhoto="slotData">
        <img :src="realPhoto" alt="" class="real-photo" @click="showPhoto(slotData)" />
      </template>
    </TableData>
    <RealPhoto :flagVisible.sync="dialogShow" :data="dataPhoto" :title="title" />
  </div>
</template>
<script>
import TableData from '@/components/TableData.vue'
import RealPhoto from '@/components/dialog/realPhoto'
// API
import { AmountClear, Photo } from '@/api/member'
export default {
  name: 'Member',
  components: { TableData, RealPhoto },
  data() {
    return {
      // 弹窗的标题
      title: '',
      realPhoto: require('@/assets/logo.png'),
      // 表格配置
      tableConfig: {
        thead: [
          {
            label: '用户名',
            prop: 'username',
            width: 150
          },
          {
            label: '真实姓名',
            prop: 'truename',
            width: 150
          },
          {
            label: '租车订单',
            prop: 'order'
          },
          {
            label: '违章预存金',
            prop: 'illegalAmount',
            width: 200
          },
          {
            label: '押金',
            prop: 'gilding'
          },
          {
            label: '余额',
            prop: 'amount'
          },
          {
            label: '实名认证',
            prop: 'check_real_name',
            type: 'switch',
            width: 150,
            slotName: 'realPhoto',
            config: { id: 'memberId', type: 'identity', status: 'check_real_name' }
          },
          {
            label: '驾驶证',
            prop: 'check_cars',
            type: 'switch',
            width: 150,
            slotName: 'realPhoto',
            config: { id: 'memberId', type: 'drive', status: 'check_cars' }
          },
          {
            label: '黑名单',
            prop: 'blacklist',
            type: 'switch',
            config: { id: 'memberId', status: 'blacklist' }
          },
          {
            label: '操作',
            type: 'operation',
            width: 300,
            // 需要删除按钮
            default: {
              delButton: true,
              delKey: 'memberId'
            },
            // 配置编辑按钮
            buttonGroup: [
              {
                event: 'link',
                label: '详情',
                type: 'primary',
                name: 'MemberDetailed',
                queryKey: 'id',
                queryValue: 'memberId'
              },
              {
                event: 'link',
                label: '编辑',
                type: 'primary',
                name: 'MemberInfo',
                queryKey: 'id',
                queryValue: 'memberId'
              },
              { event: 'button', label: '金额清空', type: '', handler: data => this.amountClear(data) }
            ]
          }
        ],
        url: 'memberList'
      },
      searchConfig: {
        formConfig: [
          {
            type: 'keyWord',
            label: '关键字',
            searchOptions: ['username', 'truename', 'card_id']
          }
        ],
        config: {
          resetButton: true
        }
      },
      dataPhoto: {},
      // switch_disabled
      switch_disabled: '',
      // 弹窗标记
      dialogShow: false
    }
  },
  methods: {
    showPhoto(data) {
      const type = data.type
      // 更新弹窗标题
      this.title = type === 'check_cars' ? '驾驶证' : '实名认证'
      // 接口
      const requestData = {
        id: data.data.memberId,
        type: type === 'check_cars' ? 'drive' : 'identity'
      }
      Photo(requestData).then(res => {
        const data = res.data
        if (data) {
          this.dataPhoto = data
          this.dialogShow = true
        }
      })
    },

    // 清空金额
    async amountClear(data) {
      await AmountClear({ member_id: data.memberId })
      this.$message({
        type: 'success',
        message: '清空成功'
      })
      this.$refs.table.requestData()
    }
  }
}
</script>
<style lass="scss" scoped>
.real-photo {
  display: inline-block;
  width: 30px;
  margin-left: 5px;
  vertical-align: middle;
  cursor: pointer;
}
</style>
