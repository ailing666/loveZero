<template>
  <h2>当前计数: {{ counter }}</h2>
  <Son @countAdd="addBtnClick" />
</template>

<script>
import Son from './components/Son.vue';

export default {
  name: 'App',
  components: { Son },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addBtnClick(val) {
      this.counter += val
    },
  },
};
</script>
