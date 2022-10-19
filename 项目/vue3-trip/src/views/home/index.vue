<template>
  <div class="home">
    <home-nav></home-nav>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
    <div class="search-bar" v-if="isShowSearchBar">
      <search-bar :start-date="'09.19'" :end-date="'09.20'"/>
    </div>
    <home-content></home-content>
  </div>
</template>

<script setup>
import { watch,computed } from 'vue';
import useScroll from '@/hooks/useScroll';
import useHomeStore from '@/stores/modules/home';
import HomeNav from '@/views/home/components/home-nav.vue';
import HomeSearchBox from '@/views/home/components/home-search-box.vue';
import HomeContent from '@/views/home/components/home-content.vue';
import HomeCategories from '@/views/home/components/home-categories.vue';
import SearchBar from '@/components/SearchBar.vue'

const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouselistData();
const { isReachBottom,scrollTop } = useScroll();
// 触底加载
watch(isReachBottom, newValue => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false;
    });
  }
});

// 是否显示SearchBar
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 100px;
}

.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>
