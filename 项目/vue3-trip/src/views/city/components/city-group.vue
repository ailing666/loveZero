<template>
  <!-- 索引列表 -->
  <van-index-bar>
    <van-index-anchor index="热门" />
    <!-- 热门 -->
    <div class="list">
      <template v-for="(item, index) in groupData.hotCities" :key="index">
        <div class="city" @click="cityClick(item)">{{ item.cityName }}</div>
      </template>
    </div>

    <template v-for="(item, index) in groupData.cities" :key="index">
      <van-index-anchor :index="item.group" />
      <template v-for="(value, idx) in item.cities" :key="idx">
        <van-cell :title="value.cityName" @click="cityClick(value)" />
      </template>
    </template>
  </van-index-bar>
</template>

<script setup>
import useCityStore from "@/stores/modules/city";
import { useRouter } from "vue-router";

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});

// 监听城市的点击
const router = useRouter();
const cityStore = useCityStore();
const cityClick = (city) => {
  // 选中当前城市
  cityStore.currentCity = city;

  // 返回上一级
  router.back();
};
</script>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 25px;

  .city {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    font-size: 12px;
    color: #000;
    text-align: center;
    line-height: 28px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
