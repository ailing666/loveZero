<template>
  <!-- 搜索框 -->
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
  />
  <!-- tab -->
  <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
    <template v-for="(value, key) in allCities" :key="key">
      <van-tab :title="value.title" :name="key"></van-tab>
    </template>
  </van-tabs>
</template>

<script setup>
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";

const onSearch = () => {};
const onCancel = () => {};
const tabActive = ref();

const cityStore = useCityStore();

// 请求数据
cityStore.fetchAllCitiesData();
const { allCities } = storeToRefs(cityStore);
// 当前tab的数据
const currentGroup = computed(() => allCities.value[tabActive.value]);
</script>

<style lang="less" scoped></style>
