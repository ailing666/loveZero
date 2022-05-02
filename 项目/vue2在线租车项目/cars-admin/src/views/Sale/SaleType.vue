<template>
  <div>
    <TableData ref="table" :tableConfig="tableConfig" :searchConfig="searchConfig"> </TableData>
    <AddSaleList :isVisible.sync="showDialog" :data="saleListData" />
  </div>
</template>
<script>
import TableData from '@/components/TableData.vue'
import AddSaleList from '@c/dialog/addSaleList'
export default {
  name: 'SaleTpye',
  components: { TableData, AddSaleList },
  data() {
    return {
      // 弹窗标记
      showDialog: false,
      // 表格配置
      tableConfig: {
        thead: [
          { label: '租车类型', prop: 'carsLeaseTypeName' },
          {
            label: '禁启用',
            prop: 'carsLeaseStatus',
            type: 'switch',
            config: { id: 'carsLeaseTypeId', status: 'carsLeaseStatus' },
            disabledKey: 'carsLeaseTypeId'
          },
          { label: '车辆列表', prop: 'carsList', width: 500 },
          {
            label: '操作',
            type: 'operation',
            width: 500,
            buttonGroup: [{ label: '编辑', type: 'danger', event: 'button', handler: data => this.edit(data) }]
          }
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
            handler: () => this.add()
          }
        ]
      },
      saleListData: {}
    }
  },
  watch: {
    showDialog(newV) {
      // 弹窗关闭刷新数据
      !newV && this.$refs.table.requestData()
    }
  },
  methods: {
    // 新增
    add() {
      this.showDialog = true
    },
    // 编辑
    edit(data) {
      this.showDialog = true
      this.saleListData = JSON.parse(JSON.stringify(data))
    }
  }
}
</script>
<style lass="scss" scoped></style>
