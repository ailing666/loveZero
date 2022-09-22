<template>
  <h2>{{ score }}---{{ scoreLevel }}</h2>
  <button @click="btnClick">修改分数</button>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup() {
    const score = ref(89);
    const scoreLevel = computed(() => {
      return score.value >= 60 ? '及格' : '不及格';
    });
    const btnClick = () => {
      score.value -= 10;
    };
    return {
      score,
      scoreLevel,
      btnClick,
    };
  },
};
</script>
