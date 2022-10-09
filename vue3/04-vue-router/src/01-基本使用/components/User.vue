<template>
  <!-- 在模板中获取到id -->
  <h2>User: {{ $route.params.id }}</h2>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
// 获取动态路由值
console.log(route.params.id);
</script>
