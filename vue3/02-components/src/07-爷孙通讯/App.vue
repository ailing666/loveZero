<template>
  <home></home>
  <h2>App: {{ message }}</h2>
  <button @click="message = 'hello world'">修改message</button>
</template>

<script>
  // 导入 computed 函数
import { computed } from 'vue';
import Home from './Home.vue';

export default {
  components: {
    Home,
  },
  data() {
    return {
      message: 'Hello App',
    };
  },
  // provide一般都是写成函数
  provide() {
    return {
      age: 18,
      // 响应式数据需要用 computed 函数返回
      message: computed(() => this.message),
    };
  },
};
</script>