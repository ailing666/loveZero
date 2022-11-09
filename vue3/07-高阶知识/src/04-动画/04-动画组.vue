<template>
  <div class="app">
    <button @click="addNumber">添加数字</button>
    <button @click="removeNumber">删除数字</button>
    
    <transition-group tag="div" name="abc">
      <template v-for="item in nums" :key="item">
        <span>{{ item }}</span>
      </template>
    </transition-group>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const nums = ref([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

const addNumber = () => {
  nums.value.splice(randomIndex(), 0, nums.value.length)
}

const removeNumber = () => {
  nums.value.splice(randomIndex(), 1)
}

const randomIndex = () => {
  return Math.floor(Math.random() * nums.value.length)
}

</script>

<style scoped>

span {
  margin-right: 10px;
  display: inline-block;
}

.abc-enter-from,
.abc-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.abc-enter-to,
.abc-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.abc-enter-active,
.abc-leave-active {
  transition: all 1s ease;
}

.abc-leave-active {
  position: absolute;
}


/* 针对其他移动的阶段需要的动画 */
.abc-move {
  transition: all 1s ease;
}

</style>
