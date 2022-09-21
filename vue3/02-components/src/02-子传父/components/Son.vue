<template>
  <button @click="btnClick(5)">+5</button>
  <button @click="btnClick(10)">+10</button>
</template>

<script>
export default {
  // 如果使用了emit，尽量把自定义内容放到emits后面的数组中
  emits: ['countAdd'],
  emits: {
    // 校验失败不影响触发，但是会在控制台警告 warning
    countAdd: function (count) {
      if (count === 5) {
        return true;
      }
      return false;
    },
  },
  methods: {
    btnClick(val) {
      // 触发父组件 countAdd 方法，并传入参数
      this.$emit('countAdd', val);
    },
  },
};
</script>
