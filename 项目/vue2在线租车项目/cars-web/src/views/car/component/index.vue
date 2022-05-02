<template>
  <div>
    <!-- 车辆卡片 -->
    <section class="cars-item" @click="openCarsInfo">
      <!-- 头部 -->
      <header>
        <h4 class="car-logo fl fs-16">
          <img :src="carInfo.imgUrl" />
          <span class="name">{{ carInfo.carsMode }}</span>
        </h4>
        <p class="car-dec fr opacity-4">
          <span>{{ carInfo.carsAttr | energyType }}</span>
          <span>{{ carInfo.carsAttr | seatNumber }}座</span>
        </p>
      </header>
      <!-- 中间内容 -->
      <main>
        <div class="car-info">
          <h5>{{ carInfo.carsNumber }}</h5>
          <section class="df">
            <ul class="car-electric" :class="carInfo.oil | electricNumber">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div class="car-mileage">
              <span>约</span>
              <strong class="mileage-number">{{
                carInfo.countKm | setCountKm
              }}</strong>
              <span>KM</span>
            </div>
          </section>
        </div>
        <img class="car-img" :src="carInfo.carsImg" alt />
      </main>
      <!-- 底部 -->
      <footer>
        <a href="#" class="parking-link">{{ carInfo.parkingName }}</a>
      </footer>
    </section>
    <!-- 车辆详情 -->
    <section
      class="cars-item cars-detailed"
      :style="'height:' + carsInfoHeight"
      v-if="carsInfoShow"
    >
      <div>
        <h4 class="cars-detailed-parking">{{ carInfo.parkingName }}</h4>
        <i class="close" @click="closeCarsInfo"></i>
      </div>
      <header>
        <h4 class="car-logo fl fs-16">
          <img :src="carInfo.imgUrl" />
          <span class="name">{{ carInfo.carsMode }}</span>
        </h4>
        <p class="car-dec fr opacity-4">
          <span>{{ carInfo.carsAttr | energyType }}</span>
          <span>{{ carInfo.carsAttr | seatNumber }}座</span>
        </p>
      </header>
      <img class="car-img" :src="carInfo.carsImg" alt />

      <div class="car-info clearfix">
        <h5 class="fl" style="fontsize: 24px">{{ carInfo.carsNumber }}</h5>
        <section class="df fr">
          <div class="car-mileage">
            <span>约</span>
            <strong class="mileage-number">{{
              carInfo.countKm | setCountKm
            }}</strong>
            <span>KM</span>
          </div>
        </section>
      </div>
      <div class="cars-electric-warp">
        <div class="cars-electric-bg">
          <div class="cars-electric-high" style="width: 80%"></div>
        </div>
      </div>
      <p class="info">取车约支付12.0元停车费，实际补贴12.0元</p>
      <ul class="car-rental-time">
        <li
          v-for="item in leaseListData"
          :class="{ current: leaseId === item.carsLeaseTypeId }"
          :key="item.carsLeaseTypeId"
          @click="leaseId = item.carsLeaseTypeId"
        >
          <h4 class="name">{{ item.carsLeaseTypeName }}</h4>
          <span class="price">￥{{ item.price }}</span>
        </li>
      </ul>
      <div class="car-insurance clearfix">
        <p class="fl">参保《全面保障服务》用车更放心</p>
        <!-- 激活：current -->
        <i class="current"></i>
      </div>
      <a href="javascript: void(0);" class="select-car-btn" @click="confirmCars"
        >预约用车</a
      >
    </section>
  </div>
</template>

<script>
import { getCarsAttrKey } from '@/utils/format'
import { GetLeaseList, ConfirmCars } from '@/api/cars.js'
export default {
  name: 'CarList',
  props: {
    carInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      // 车辆信息高度
      carsInfoHeight: 0,
      // 车辆信息是否显示
      carsInfoShow: false,
      // 定时器
      timer: null,
      // 租赁列表
      leaseListData: [],
      leaseId: '',
      // 检验提示
      message_item: this.$store.state.config.message_item,
      // 用户审核
      arr: ['check_real_name', 'check_cars', 'gilding', 'illegalAmount']
    }
  },
  filters: {
    electricNumber(val) {
      return `active-${Math.round(val / 10)}`
    },
    energyType(val) {
      return getCarsAttrKey({
        data: val,
        parerntKey: 'basis',
        childKey: 'energy_type'
      })
    },
    seatNumber(val) {
      return getCarsAttrKey({
        data: val,
        parerntKey: 'car_body',
        childKey: 'seat_number'
      })
    },
    setCountKm(val) {
      return parseInt(val)
    }
  },

  methods: {
    // 展开车辆信息
    openCarsInfo() {
      this.carsInfoShow = true
      // 可视区的高度
      const viewHeight =
        document.documentElement.clientHeight || document.body.clientHeight

      const height = viewHeight - 145

      // 清除定时器
      if (this.timer) {
        clearTimeout(this.timer)
      }

      // 添加定时器，过渡效果
      this.timer = setTimeout(() => {
        this.carsInfoHeight = `${height}px`
      }, 10)

      this.getLaseList()
    },

    // 获取租赁列表
    async getLaseList() {
      if (this.leaseListData && this.leaseListData.length > 0) {
        return false
      }
      const res = await GetLeaseList({ carsId: this.carInfo.id })

      res.data && (this.leaseListData = res.data.data)
    },
    // 预约用车
    confirmCars() {
      // 判断用户是登录
      if (!this.$store.state.account.token) {
        this.$router.push({ name: 'Login' })
        return
      }
      // 判断是否选择了租车类型
      if (!this.leaseId) {
        this.$message({
          message: '请选择租车类型',
          type: 'error'
        })
        return
      }

      const requestData = {
        cars_id: this.carInfo.id,
        cars_lease_type_id: this.leaseId
      }
      ConfirmCars(requestData).then((res) => {
        const data = res.data
        const key = Object.keys(data)
        if (key && key.length > 0) {
          // 匹配 message
          this.backup_key = key[0] // 临时存储
          if (this.arr.includes(key[0])) {
            let message = ''
            let msg = this.message_item[key[0]].msg
            msg && (message = msg)
            // 弹窗提示
            this.$confirm(message, '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              let router = this.message_item[this.backup_key].router
              if (router) {
                console.log(
                  'this.message_item[this.backup_key].type: ',
                  this.message_item[this.backup_key].type
                )
                this.$router.push({
                  name: router,
                  query: this.message_item[this.backup_key].type
                })
              }
            })
          } else {
            this.$message({
              message: this.message_item[this.backup_key].msg,
              type: 'error'
            })
          }
        }
      })
    },
    // 关闭车辆信息
    closeCarsInfo() {
      this.carsInfoShow = false
      this.carsInfoHeight = 0
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
