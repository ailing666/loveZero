<template>
  <div class="app">
    <show-message>
      {{title}}
    </show-message>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue';

export default {
  components: {
    ShowMessage,
  },
  data() {
    return {
      title: '父组件title',
    };
  },
};
</script>
