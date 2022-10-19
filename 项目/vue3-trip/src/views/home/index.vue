<template>
  <div class="home">
    <home-nav></home-nav>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box></home-search-box>
    <home-categories></home-categories>
    <home-content></home-content>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import useScroll from '@/hooks/useScroll';
import useHomeStore from '@/stores/modules/home';
import HomeNav from '@/views/home/components/home-nav.vue';
import HomeSearchBox from '@/views/home/components/home-search-box.vue';
import HomeContent from '@/views/home/components/home-content.vue';
import HomeCategories from '@/views/home/components/home-categories.vue';
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHouselistData();
const { isReachBottom } = useScroll();
watch(isReachBottom, newValue => {
  if (newValue) {
    homeStore.fetchHouselistData().then(() => {
      isReachBottom.value = false;
    });
  }
});
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
</style>
