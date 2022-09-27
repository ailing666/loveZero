<template>
  <div>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="counter++">+1</button>
    <button @click="name = 'abc'">修改name</button>
  </div>
</template>

<script>
import { watchEffect, ref } from 'vue';

export default {
  setup() {
    const counter = ref(0);
    const name = ref('cba');

    // 在执行的过程中, 会自动的收集依赖(依赖哪些响应式的数据)
    const stopWatch = watchEffect(() => {
      console.log(counter.value, name.value);

      // 判断counter.value > 10
      if (counter.value >= 10) {
        stopWatch();
      }
    });

    return {
      counter,
      name,
    };
  },
};
</script>

<style scoped></style>
