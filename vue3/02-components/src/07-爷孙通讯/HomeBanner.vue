<template>
  <!-- 响应式数据取值需要 .value -->
  <h2>HomeBanner: {{ name }} - {{ age }} - {{ message.value }}</h2>
</template>

<script>
export default {
  // 注入
  inject: ['name', 'age', 'message'],
};
</script>