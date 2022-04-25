<template>
  <div>
    <!-- 表格数据 -->
    <TableData :tableConfig="tableConfig" :searchConfig="searchConfig">
      <template v-slot:operation="slotData">
        <el-button type="danger" size="small" @click="editParking(slotData.data)">编辑</el-button>
      </template>
    </TableData>
    <AddCarsBrand :isVisible.sync="showDialog" :data="brandData" />
  </div>
</template>
<script>
import AddCarsBrand from '@c/dialog/addCarsBrand'
import TableData from '@/components/TableData.vue'
import { BrandStatus } from '@/api/brand'
export default {
  name: 'CarBrand',
  components: { AddCarsBrand, TableData },
  data () {
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
            slotName: 'operation'
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
            type: 'success',
            handler: () => (this.showDialog = true)
          }
        ],
        config: {
          resetButton: false
        }
      },
    }
  },
  methods: {
    // 编辑
    editParking (query) {
      this.brandData = JSON.parse(JSON.stringify(query))
      this.showDialog = true
    },
  }
}
</script>
<style lass="scss" scoped></style>
