<template>
  <div class="app">
    <!-- 直接使用 -->
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <h2>message: {{ message }}</h2>
    <h2>id-111 {{ getListById(111) }}</h2>
    <h2>id-222 {{ getListById(222) }}</h2>
  </div>
</template>

<script setup>
import { computed, toRefs } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

// 直接解构, 并且包裹成ref
const { getListById } = toRefs(store.getters);

// 针对某一个getters属性使用computed
const message = computed(() => store.getters.message);
</script>
