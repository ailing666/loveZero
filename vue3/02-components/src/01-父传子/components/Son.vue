<template>
  <h2>姓名: {{ name }}</h2>
  <h2>年龄: {{ age }}</h2>
  <!-- 绑定非props值 -->
  <div v-bind="$attrs"></div>
</template>

<script>
export default {
  // 接受父组件传来的参数
  props: {
    name: {
      type: String,
      default: '默认值',
    },
    age: {
      type: Number,
      // 必填
      required: true,
      default: 0,
    },
    hobbies: {
      type: Array,
      // 数组和对象默认值需要用函数返回出来
      default: () => ['篮球', 'rap', '唱跳'],
    },
    info: {
      type: Object,
      // 数组和对象默认值需要用函数返回出来
      default: () => ({}),
    },
  },
};
</script>

<style scoped></style>
