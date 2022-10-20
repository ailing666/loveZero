<template>
  <div>
    {{$route.query.id}}
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { getDetailInfos } from "@/services"
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const houseId = route.params.id
const detailInfos = ref({})
getDetailInfos(houseId).then(res => {
  detailInfos.value = res.data
  console.log('%cdetailInfos.value: ', 'color: #2a904d;', detailInfos.value);
})
</script>

<style lang="less" scoped>

</style>
