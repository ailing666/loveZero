<template>
  <div class="app">
    <input type="text" v-focus>
  </div>
</template>

<script setup>

const vFocus = {
  // 生命周期的函数(自定义指令)
  mounted(el) {
    // console.log("v-focus应用的元素被挂载了", el)
    el?.focus()
  }
}

</script>

<style scoped>

</style>
