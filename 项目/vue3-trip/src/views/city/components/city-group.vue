<template>
  <van-index-bar>
    <template v-for="(item, index) in groupData.cities" :key="index">
      <van-index-anchor :index="item.group" />
      <template v-for="(value, idx) in item.cities" :key="idx">
        <van-cell :title="value.cityName" />
      </template>
    </template>
  </van-index-bar>
</template>

<script setup>
const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style lang="less" scoped></style>
