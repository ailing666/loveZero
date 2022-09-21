<template>
  <div class="nav-bar">
    <div class="left">
      <!-- 绑定插槽名 -->
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>
  <div>
    <slot name="default">default</slot>
  </div>
  <div>
    <slot>default2</slot>
  </div>
</template>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.left {
  width: 80px;
  background-color: orange;
}

.center {
  flex: 1;
  background-color: skyblue;
}

.right {
  width: 80px;
  background-color: aquamarine;
}
</style>
