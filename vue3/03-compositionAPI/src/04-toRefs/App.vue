<template>
  <h2>info: {{ name }} - {{ age }} - {{ height }}</h2>
  <button @click="age++">修改age</button>
  <button @click="height++">修改height</button>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';
export default {
  setup() {
    const info = reactive({
      name: 'loveZero',
      age: 18,
      height: 1.88,
    });

    // reactive被解构后会变成普通的值, 失去响应式
    // 将对象中的某个值转为响应式
    const height = toRef(info, 'height');
    // toRefs包裹对象，解构出来的就是响应式数据
    const { name, age } = toRefs(info);

    return {
      name,
      age,
      height,
    };
  },
};
</script>
