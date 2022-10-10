<template>
  <!-- 直接使用 -->
  <h2>count: {{ counterStore.count }}</h2>
  <!-- 通过storeToRefs使用 -->
  <h2>count: {{ count }}</h2>
  <button @click="incrementCount">count+1</button>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useCounter from './stores/counter';

const counterStore = useCounter();

const { count } = storeToRefs(counterStore);

function incrementCount() {
  // 可以直接修改数据
  counterStore.count++;
}
</script>
