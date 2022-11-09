<template>
  <div class="app">
    <div>
      <button @click="btnClick">切换</button>
    </div>

    <transition name="abc" mode="out-in" appear="">
      <component :is="typeComponentMap[pageParams.type]"></component>
    </transition>
  </div>
</template>

<script setup>
import { reactive, ref} from 'vue';
import Home from './pages/Home.vue';
import About from './pages/About.vue';

const typeComponentMap = {
  1: Home,
  2: About,
};

let isShow = ref(true);
const pageParams = reactive({ type: 1 });
function btnClick() {
  isShow = !isShow;
  pageParams.type = isShow ? 1 : 2;
}
</script>

<style scoped>
h2 {
  display: inline-block;
}

/* transition */
.abc-enter-from,
.abc-leave-to {
  opacity: 0;
}

.abc-enter-to,
.abc-leave-from {
  opacity: 1;
}

.abc-enter-active {
  animation: abcAnim 2s ease;
  transition: opacity 2s ease;
}

.abc-leave-active {
  animation: abcAnim 2s ease reverse;
  transition: opacity 2s ease;
}

@keyframes abcAnim {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
