<template>
  <div class="user">
    <HeaderBack column="安全设置" />
    <div class="text-center color-white lh-40">
      <h4><strong>订单号</strong></h4>
      <p>a2121fads34fas31fa</p>
    </div>
    <div class="blank-40"></div>
    <div>
      <el-button type="warning" round class="submit" @click="gotoPay"
        ><strong>去支付</strong></el-button
      >
    </div>
    <div class="blank-20"></div>
    <div>
      <el-button type="primary" round class="submit" @click="overPay"
        ><strong>完成支付</strong></el-button
      >
    </div>
  </div>
</template>
<script>
import { OrderStatus } from '@/api/order'
import { setInterval, clearInterval } from 'timers'
export default {
  name: 'PayStatus',
  components: {},
  data() {
    return {
      timer: null
    }
  },
  beforeMount() {
    this.getOrderStatus()
    this.setInter()
  },
  methods: {
    // 查询订单状态
    orderStatus() {
      // 拿到订单号
      const order_no = localStorage.getItem('order_no')
      return OrderStatus({ order_no }).then((res) => {
        const status = res.data.status
        return status
      })
    },

    async getOrderStatus() {
      const status = await this.orderStatus()
      this.toResult(status)
    },

    // 没隔3秒查询一次订单状态
    setInter() {
      this.timer = setInterval(() => {
        this.getOrderStatus()
      }, 3000)
    },

    // 去支付
    async gotoPay() {
      const status = await this.orderStatus()
      this.toResult(status)
    },

    // 支付完成
    async overPay() {
      const status = await this.orderStatus()
      this.toResult(status)
    },

    toResult(status) {
      // 订单支付成功就清除定时器，跳转页面
      if (status === 'success') {
        clearInterval(this.timer)
        this.$router.replace({
          name: 'PayResult',
          query: { status }
        })
      }

      if (status === 'fail') {
      }
    }
  }
}
</script>
<style lang="scss"></style>
