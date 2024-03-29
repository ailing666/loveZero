<template>
  <div>
    <tab-control
      v-if="showTabControl"
      class="tabs"
      :titles="names"
      @tabItemClick="tabClick"
      ref="tabControlRef"
    />
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe
        name="轮播图"
        :swipeData="mainPart?.topModule?.housePicture?.housePics"
      ></detail-swipe>
      <detail-infos name="描述" :ref="getSectionRef" :topInfos="mainPart.topModule" />
      <detail-facility
        name="设施"
        :ref="getSectionRef"
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <detail-landlord
        name="房东"
        :ref="getSectionRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      />
      <detail-comment
        name="评论"
        :ref="getSectionRef"
        :comment="mainPart.dynamicModule.commentModule"
      />
      <detail-map
        name="周边"
        :ref="getSectionRef"
        :position="mainPart.dynamicModule.positionModule"
      />
      <detail-intro :price-intro="mainPart.introductionModule" />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { getDetailInfos } from '@/services';
import { useRoute, useRouter } from 'vue-router';
import DetailSwipe from './components/detail-swipe.vue';
import DetailInfos from './components/detail-infos.vue';
import DetailFacility from './components/detail-facility.vue';
import DetailLandlord from './components/detail-landlord.vue';
import DetailComment from './components/detail-comment.vue';
import DetailIntro from './components/detail-intro.vue';
import DetailMap from './components/detail-map.vue';
import TabControl from '@/components/TabControl.vue';
import useScroll from '@/hooks/useScroll';

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

// tabControl相关的操作
const detailRef = ref();
const { scrollTop } = useScroll(detailRef);
// 当滚动超过300时显示 TabControl
const showTabControl = computed(() => scrollTop.value >= 300);

const sectionEls = ref({});
const names = computed(() => Object.keys(sectionEls.value));
// 
const getSectionRef = value => {
  if (!value) return;
  const name = value.$el.getAttribute('name');
  sectionEls.value[name] = value.$el;
};
let isClick = false;
let currentDistance = -1;

// tab点击
const tabClick = index => {
  const key = Object.keys(sectionEls.value)[index];
  const el = sectionEls.value[key];
  let distance = el.offsetTop;
  if (index !== 0) {
    distance = distance - 44;
  }

  isClick = true;
  currentDistance = distance;
  window.scrollTo({
    top: distance,
    behavior: 'smooth',
  });
};

// 页面滚动, 滚动时匹配对应的tabControll的index
const tabControlRef = ref();
watch(scrollTop, newValue => {
  if (newValue === currentDistance) {
    isClick = false;
  }
  if (isClick) return;

  // 1.获取所有的区域的offsetTops
  const els = Object.values(sectionEls.value);
  const values = els.map(el => el.offsetTop);

  // 2.根据newValue去匹配想要索引
  let index = values.length - 1;
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 44) {
      index = i - 1;
      break;
    }
  }
  tabControlRef.value?.setCurrentIndex(index);
});
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
