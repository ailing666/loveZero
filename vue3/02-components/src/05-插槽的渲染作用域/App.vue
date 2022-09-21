<template>
  <div class="app">
    <show-message>
      <!-- 无法访问子组件中的变量 -->
      {{ title }}
    </show-message>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';

export default {
  components: {
    ShowMessage,
  },
};
</script>
