<template>
  <div class="home">
    <home-nav></home-nav>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-search-box></home-search-box>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import HomeNav from '@/views/home/components/home-nav.vue'
import HomeSearchBox from '@/views/home/components/home-search-box.vue'
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
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
