<template>
  <div>
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <detail-swipe :swipeData="mainPart?.topModule?.housePicture?.housePics"></detail-swipe>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { getDetailInfos } from '@/services';
import { useRoute, useRouter } from 'vue-router';
import detailSwipe from './components/detail-swipe.vue';
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

<style lang="less" scoped></style>
