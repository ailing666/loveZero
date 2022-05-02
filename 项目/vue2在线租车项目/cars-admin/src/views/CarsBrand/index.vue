<template>
  <div>
    <!-- 表格数据 -->
    <TableData ref="table" :tableConfig="tableConfig" :searchConfig="searchConfig"></TableData>
    <AddCarsBrand :isVisible.sync="showDialog" :data="brandData" />
  </div>
</template>
<script>
import AddCarsBrand from '@c/dialog/addCarsBrand'
import TableData from '@/components/TableData.vue'
export default {
  name: 'CarBrand',
  components: { AddCarsBrand, TableData },
  data() {
    return {
      // 弹窗标记
      showDialog: false,
      brandData: {},
      tableConfig: {
        thead: [
          {
            label: 'LOGO',
            prop: 'imgUrl',
            type: 'image',
            width: 150
          },
          {
            label: '车辆品牌',
            prop: 'nameCh',
            type: 'function',
            callback: row => `${row.nameCh}/${row.nameEn}`
          },
          { label: '禁启用', prop: 'status', type: 'switch', width: '100px' },
          {
            label: '操作',
            type: 'operation',
            default: {
              delButton: true
            },
            buttonGroup: [
              {
                // 指定是按钮事件
                event: 'button',
                label: '编辑',
                type: 'danger',
                handler: data => {
                  this.editParking(data)
                }
              }
            ]
          }
        ],
        url: 'brandList'
      },
      searchConfig: {
        formConfig: [
          {
            label: '车辆品牌',
            prop: 'brand',
            type: 'input',
            width: '150px',
            placeholder: '请输入车辆品牌'
          }
        ],
        formButton: [
          {
            label: '新增',
            key: 'add',
            element: 'button',
            type: 'success',
            handler: () => (this.showDialog = true)
          }
        ],
        config: {
          resetButton: false
        }
      }
    }
  },
  watch: {
    showDialog(newV) {
      !newV && this.$refs.table.requestData()
    }
  },
  methods: {
    // 编辑
    editParking(query) {
      this.brandData = JSON.parse(JSON.stringify(query))
      this.showDialog = true
    }
  }
}
</script>
<style lass="scss" scoped></style>
