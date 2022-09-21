<template>
  <h2>{{ title }}</h2>
  <!-- 将数据传递出去 -->
  <slot :title="title" :list="list"></slot>
</template>

<script>
export default {
  data() {
    return {
      title: '子组件title',
      list: ['aaa','bbb','ccc'],
    };
  },
};
</script>
