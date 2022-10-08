<template>
  <div>
    <div>ShowInfo: {{ name }}-{{ age }}</div>
    <button @click="showInfoBtnClick">showInfoButton</button>
  </div>
</template>

<script setup>
// defineProps 定义props
const props = defineProps({
  name: {
    type: String,
    default: '默认值',
  },
  age: {
    type: Number,
    default: 0,
  },
});

// defineEmits 绑定函数, 并且发出事件
const emits = defineEmits(['infoBtnClick']);
function showInfoBtnClick() {
  emits('infoBtnClick', 'showInfo内部发生了点击');
}

function foo() {
  console.log('foo function');
}
// 父组件要通过ref调用子组件方法，子组件需要将这个方法暴露出去
defineExpose({
  foo,
});
</script>

<style scoped></style>
