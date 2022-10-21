<template>
  <div>
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />

    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe name="轮播图" :swipeData="mainPart?.topModule?.housePicture?.housePics"></detail-swipe>
      <detail-infos name="描述" :topInfos="mainPart.topModule" />
      <detail-facility name="设施" :ref="getSectionRef" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getDetailInfos } from '@/services';
import { useRoute, useRouter } from 'vue-router';
import DetailSwipe from './components/detail-swipe.vue';
import DetailInfos from './components/detail-infos.vue';
import DetailFacility from './components/detail-facility.vue';
const router = useRouter();
const route = useRoute();
const houseId = route.params.id;
const detailInfos = ref({});
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data;
});
const mainPart = computed(() => detailInfos.value.mainPart);
// 监听返回按钮的点击
const onClickLeft = () => {
  router.back();
};
</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  z-index: 9;
  left: 0;
  right: 0;
  top: 0;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>