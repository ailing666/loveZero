<template>
  <h2>{{ title }}</h2>
  <button @click="changeTittle">changeTittle</button>
</template>

<script>
import { ref, onMounted, onUpdated, onUnmounted,onRenderTracked,onRenderTriggered } from 'vue';

export default {
  setup() {
    const title = ref('hello');
    function changeTittle() {
      title.value = 'hhhhh';
    }
    onMounted(() => {
      console.log('onmounted');
    });
    onRenderTracked(() => {
      console.log('onRenderTracked');
    });
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    });
    
    onUpdated(() => {
      console.log('onUpdated');
    });
    onUnmounted(() => {
      console.log('onUnmounted');
    });
    return {
      title,
      changeTittle,
    };
  },
};
</script>
