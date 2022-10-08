<template>
  <div>
    <div>AppContent: {{ message }}</div>
    <button @click="changeMessage">修改message</button>
    <show-info name="loveZero" :age="18" @info-btn-click="infoBtnClick" ref="showInfoRef"></show-info>
  </div>
</template>

<script setup>
// 所有编写在顶层中的代码, 都是默认暴露给template可以使用
import { ref, onMounted } from 'vue';
// 组件导入后，可以直接使用
import ShowInfo from './ShowInfo.vue';

// 定义的数据和方法不需要return，可以直接使用
// 定义响应式数据
const message = ref('Hello');
console.log(message.value);

function changeMessage() {
  message.value = '你好';
}

function infoBtnClick(payload) {
  console.log('监听到showInfo内部的点击:', payload);
}

// 获取组件实例
const showInfoRef = ref();
onMounted(() => {
  showInfoRef.value.foo();
});
</script>
