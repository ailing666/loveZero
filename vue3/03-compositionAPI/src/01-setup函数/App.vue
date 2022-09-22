<template>
  <Home msg="hello" abc="cba" @changeTitle="changeTitle">
    <span>{{ title }}</span>
  </Home>
</template>

<script>
import Home from './Home.vue';
import { ref } from 'vue';

export default {
  components: {
    Home,
  },
  setup() {
    const title = ref('setup');
    function changeTitle(val) {
      title.value = val;
    }
    return {
      title,
      changeTitle,
    };
  },
};
</script>
