<template>
  <div>
    <TableData ref="table" :tableConfig="tableConfig" :searchConfig="searchConfig"> </TableData>
  </div>
</template>
<script>
import TableData from '@/components/TableData.vue'
// API
import { OrderWait, OrderOvertime, OrderOver, OrderCancel, OrderReturn } from '@/api/order'
export default {
  name: 'Order',
  components: { TableData },
  data() {
    return {
      // 表格配置
      tableConfig: {
        thead: [
          { label: '订单号', prop: 'order_no' },
          {
            label: '状态',
            prop: 'order_status',
            type: 'function',
            callback: row => {
              const orderStatus = this.$store.state.config.order_status
              const status = orderStatus[row.order_status]
              return status ? status.zh : ''
            }
          },
          {
            label: '日期',
            prop: 'create_date',
            type: 'function',
            callback: row => {
              // 空数据时
              if (!row.create_date) {
                return ''
              }
              // 分割日期
              const dateSplit = row.create_date.split(' ')
              return `${dateSplit[0]} <br/> ${dateSplit[1]}`
            }
          },
          {
            label: '金额',
            prop: 'amount'
          },
          {
            label: '操作',
            type: 'operation',
            width: 550,
            default: {
              delButton: true
            },
            buttonGroup: [
              { label: '待取车', type: '', event: 'button', handler: data => this.orderWait(data) },
              { label: '超时', type: '', event: 'button', handler: data => this.orderOvertime(data) },
              { label: '完成', type: '', event: 'button', handler: data => this.orderOver(data) },
              { label: '取消', type: '', event: 'button', handler: data => this.orderCancel(data) },
              { label: '待还车', type: '', event: 'button', handler: data => this.ordrerReturn(data) }
            ]
          }
        ],
        url: 'orderList'
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
        ]
      }
    }
  },
  methods: {
    async orderWait(data) {
      await OrderWait({ order_no: data.order_no, cars_id: data.cars_id })
      this.loadData()
    },
    async orderOvertime(data) {
      await OrderOvertime({ order_no: data.order_no, cars_id: data.cars_id })
      this.loadData()
    },
    async orderOver(data) {
      await OrderOver({ order_no: data.order_no, cars_id: data.cars_id })
      this.loadData()
    },

    async orderCancel(data) {
      await OrderCancel({ order_no: data.order_no, cars_id: data.cars_id })
      this.loadData()
    },
    async ordrerReturn(data) {
      await OrderReturn({ order_no: data.order_no, cars_id: data.cars_id })
      this.loadData()
    },
    loadData() {
      this.$refs.table.requestData()
    }
  }
}
</script>
<style lass="scss" scoped></style>
