<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <transition name="abc" :duration="{ enter: 800, leave: 1000 }">
      <h2 v-if="isShow">哈哈哈哈哈哈</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isShow = ref(false);
</script>

<style scoped>
h2 {
  display: inline-block;
}

.abc-enter-active {
  animation: abcAnim 2s ease;
}

.abc-leave-active {
  animation: abcAnim 2s ease reverse;
}

@keyframes abcAnim {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes abcLeaveAnim {
  0% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(-500px);
    opacity: 0;
  }
}
</style>
