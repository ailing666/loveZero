<template>
  <h2>{{ title }}</h2>
  <slot></slot>
</template>

<script>
export default {
  data() {
    return {
      title: '子组件title',
    };
  },
};
</script>
