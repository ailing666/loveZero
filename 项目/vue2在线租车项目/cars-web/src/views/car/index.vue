<template>
  <div>
    <div class="cars-wrap" v-if="carsData && carsData.length > 0">
      <swiper class="cars-swiper-container" :options="swiperOption">
        <swiper-slide v-for="item in carsData" :key="item.id">
          <CarItem :carInfo="item" />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { carsList } from '@/api/cars.js'
import 'swiper/css/swiper.css'
import CarItem from './component'
export default {
  name: 'Car',
  components: { CarItem, Swiper, SwiperSlide },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      carsData: []
    }
  },
  watch: {
    '$store.state.app.isCarsWarp'(newV, oldV) {
      // 如果是false，就将数组置为空，使列表隐藏
      if (!newV) this.carsData = []
      // 还原值
      this.$store.commit('app/SET_IS_CARS_WARP', true)
    }
  },
  methods: {
    async getCarsList(params) {
      const res = await carsList({ parkingId: params.id })
      this.carsData = res.data.data
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
