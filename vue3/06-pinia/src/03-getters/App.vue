<template>
  <h2>count: {{ counterStore.count }}</h2>
  <h2>doubleCounter: {{ counterStore.doubleCounter }}</h2>
  <h2>doubleDoubleCounter: {{ counterStore.doubleDoubleCounter }}</h2>
  <h2>getMsg: {{ counterStore.getMsg }}</h2>
  <h2>isCurrentId(66): {{ counterStore.isCurrentId(66) }}</h2>
  <h2>isCurrentId(77) : {{ counterStore.isCurrentId(77) }}</h2>
</template>

<script setup>
import useCounter from './stores/counter';
const counterStore = useCounter();
</script>
