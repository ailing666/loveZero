<template>
  <h2>count: {{ counterStore.count }}--{{ counterStore.id }}</h2>
  <button @click="incrementCount">count+1</button>
  <button @click="resetCount">重置</button>
  <button @click="patchCount">同时修改多个</button>
  <button @click="stateCount">替换</button>
</template>

<script setup>
import useCounter from './stores/counter';

const counterStore = useCounter();

function incrementCount() {
  // 可以直接修改数据
  counterStore.count++;
}

function resetCount() {
  // 重置state
  counterStore.$reset();
}
function patchCount() {
  // 同时修改多个state
  counterStore.$patch({
    count: 11111,
    id: 11,
  });
}
function stateCount() {
  // 同时修改多个state
  counterStore.$state = {
    count: 22222,
    id: 2,
    msg:'hello'
  };
}
</script>
