<template>
  <div>
    User
    <button @click="goBack">返回</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function goBack() {
  // 返回上一条记录，与router.back()相同
  // router.go(-1);

  // 前进一条记录，与router.forward()相同
  // router.go(1);

  // 前进3条
  // router.go(3);

  // 没有那么多条记录，静默失败
  // router.go(100);
}
</script>
