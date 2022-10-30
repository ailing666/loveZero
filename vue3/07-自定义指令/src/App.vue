<template>
  <div class="app">
    <h2 v-hello:msg.dnf.qwer="message">哈哈哈哈</h2>
    <h2 v-unit> {{ 111 }} </h2>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const counter = ref(0);

const message = 'hello';

const vHello = {
  mounted(el, bindings) {
    console.log(bindings);
    el.textContent = bindings.value;
  },
};
</script>
