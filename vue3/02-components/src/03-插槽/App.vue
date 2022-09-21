<template>
  <div class="app">
    <show-message title="哈哈哈">
      <button>我是按钮元素</button>
    </show-message>
    <hr />
    <show-message>
      <a href="#">百度一下</a>
    </show-message>
    <hr />
    <show-message></show-message>
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
