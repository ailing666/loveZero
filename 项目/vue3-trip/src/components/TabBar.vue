<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <template #default>
            <span>{{ item.text }}</span>
          </template>
          <template #icon>
            <img
              v-if="currentIndex !== index"
              :src="getAssetURL(item.image)"
              alt=""
            />
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from "../assets/data/tabbar";
import { getAssetURL } from "../utils/common.js";
import { ref } from "vue";

const currentIndex = ref(0);
</script>

<style lang="less" scoped>
.tab-bar {
  :deep(.van-tabbar-item__icon) { 
    font-size: 50px;
  }

  img {
    height: 26px;
  }
}
</style>
