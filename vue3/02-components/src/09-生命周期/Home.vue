<template>
  <h2>Home</h2>
</template>

<script>
  export default {
    // 卸载VNode -> DOM元素
    // 卸载之前
    beforeUnmount() {
      console.log("beforeUnmount")
    },
    // DOM元素被卸载完成
    unmounted() {
      console.log("unmounted")
    }
  }
</script>
