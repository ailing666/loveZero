<template>
  <div>
    <TableData ref="table" :tableConfig="tableConfig" :searchConfig="searchConfig">
      <template v-slot:status="slotData">
        <!-- 当前id等于switchDisabled时禁用 -->
        <el-switch
          :disabled="slotData.data.id === switchDisabled"
          @change="switchStastus(slotData.data)"
          v-model="slotData.data.carsLeaseStatus"
          active-color="#13ce66"
          inactive-color="#ff4949"
        ></el-switch>
      </template>
    </TableData>
    <AddSaleList :isVisible.sync="showDialog" :data="saleListData" />
  </div>
</template>
<script>
import TableData from '@/components/TableData.vue'
import AddSaleList from '@c/dialog/addSaleList'
export default {
  name: 'SaleTpye',
  components: { TableData, AddSaleList },
  data () {
    return {
      // 弹窗标记
      showDialog: false,
      // 表格配置
      tableConfig: {
        thead: [
          { label: "租车类型", prop: "carsLeaseTypeName" },
          { label: '禁启用', prop: 'carsLeaseStatus', type: 'slot', slotName: 'status' },
          { label: "车辆列表", prop: "carsList", width: 500 },
        ],
        checkbox: false,
        url: 'leaseList',
        // 不显示分页器
        isPagination: false,
        requestData: {}
      },
      searchConfig: {
        formConfig: [
          {
            type: 'keyWord',
            label: '关键字',
            searchOptions: ['carsLeaseTypeName', 'carsNumber']
          }
        ],
        formButton: [
          {
            label: '新增',
            prop: 'add',
            type: 'success',
            element: 'button',
            handler: () => this.carsTypeAddDialog()
          }
        ]
      },
      switchDisabled: '',
      saleListData: {}
    }
  },
  methods: {
    // 新增按钮打开弹窗
    carsTypeAddDialog () {
      this.showDialog = true
    },
    // 修改状态
    switchStastus (data) {
      this.switchDisabled = data.carsLeaseTypeId
    }
  }
}
</script>
<style lass="scss" scoped></style>
