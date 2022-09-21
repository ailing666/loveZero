<template>
  <div>
    <h2>About组件</h2>
  </div>
</template>

<script>
  export default {
    // name值要与include对上
    name: "about",
    unmounted() {
      console.log("about unmounted")
    }
  }
</script>

<style scoped>
</style>

