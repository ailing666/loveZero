<template>
  <!-- 表格数据 -->
  <TableData ref="table" :tableConfig="tableConfig" :searchConfig="searchConfig"> </TableData>
</template>
<script>
import { yearCheckType, energyType, parkingAddress } from '@/utils/common'
import TableData from '@/components/TableData.vue'
export default {
  name: 'CarIndex',
  components: { TableData },
  data () {
    return {
      form: {
        area: '',
        status: '',
        type: ''
      },
      // 关键字
      keyWord: '',
      keyValue: '',
      parkingData: {},
      // 表格配置
      tableConfig: {
        thead: [
          { label: '车牌号', prop: 'carsMode' },
          { label: '车辆品牌', prop: 'nameCh' },
          {
            label: '车辆LOGO',
            prop: 'imgUrl',
            type: 'image'
          },
          {
            label: '车辆图片',
            prop: 'carsImg',
            type: 'image'
          },
          {
            label: '年检',
            prop: 'yearCheck',
            type: 'function',
            callback: (row, prop) => yearCheckType(row[prop]),
            width: '100px'
          },
          {
            label: '能源类型',
            prop: 'energyType',
            type: 'function',
            callback: (row, prop) => energyType(row[prop]),
            width: '100px'
          },
          { label: '禁启用', prop: 'status', type: 'switch', width: '100px' },
          { label: '停车场', prop: 'parkingName' },
          {
            label: '区域',
            prop: 'address',
            type: 'function',
            callback: (row, prop) => parkingAddress(row[prop])
          },
          {
            label: '操作',
            type: 'operation',
            // 需要删除按钮
            default: {
              delButton: true,
            },
            // 配置编辑按钮
            buttonGroup: [
              {
                // 指定是路由跳转事件
                event: 'link',
                // 跳转的路由的name
                name: 'CarsAdd',
                // 跳转携带参数键,值不传默认是id
                queryKey: 'id',
                label: '编辑',
                type: 'danger'
              }
            ]
          }
        ],
        url: 'carsList',
      },
      searchConfig: {
        formConfig: [
          {
            type: 'city',
            label: '区域'
          },
          {
            type: 'select',
            label: '类型',
            prop: 'type',
            options: 'parking_type'
          },
          {
            type: 'select',
            label: '禁启用',
            prop: 'status',
            options: 'radio_disabled'
          },
          {
            type: 'keyWord',
            label: '关键字'
          }
        ],
        formButton: [
          {
            label: '新增',
            prop: 'add',
            type: 'success',
            element: 'link',
            router: '/CarsAdd'
          }
        ]
      },
    }
  }
}
</script>
<style lass="scss" scoped></style>
