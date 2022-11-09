<template>
  <!-- 将组件挂载到body中 -->
  <teleport to="body">
    <hello-world />
  </teleport>
  <!-- 将组件挂载到index.html中abc上 -->
  <teleport to="#abc">
    <hello-world />
  </teleport>
</template>

<script setup>
import HelloWorld from './HelloWorld.vue';
</script>


