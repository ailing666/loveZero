<template>
  <!-- 使用readonly的数据 -->
  <h2>ShowInfo: {{ roInfo }}</h2>
  <!-- 代码就会无效(报警告) -->
  <button @click="roInfo.name = 'james'">直接修改</button>
  <!-- 正确的做法 -->
  <button @click="roInfoBtnClick">roInfo按钮</button>
</template>

<script>
export default {
  props: {
    // readonly数据
    roInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ['changeRoInfoName'],
  setup(props, context) {
    function roInfoBtnClick() {
      context.emit('changeRoInfoName', 'james');
    }

    return {
      roInfoBtnClick,
    };
  },
};
</script>


