<template>
  <show-message>
    <!-- 接受子组件传入的数据 -->
    <template #="slotProps">
      <!-- 使用 -->
      {{ slotProps.title }}
      <div v-for="item in slotProps.list" :key="item">
      {{item}}</div>
    </template>
  </show-message>
</template>

<script>
import ShowMessage from './ShowMessage.vue';

export default {
  components: {
    ShowMessage,
  },
};
</script>
