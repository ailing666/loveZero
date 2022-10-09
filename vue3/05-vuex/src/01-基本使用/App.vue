<template>
  <div>
    <h2>counter: {{ $store.state.counter }}</h2>
  </div>
</template>
<script setup>
import { useStore } from 'vuex';
const store = useStore();
const { counter } = store.state;
console.log(counter);
</script>
