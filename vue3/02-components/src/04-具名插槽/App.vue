<template>
  <nav-bar>
    <!-- 绑定插槽名 -->
    <template #left>
      <button>返回</button>
    </template>

    <template #center>
      <span>内容</span>
    </template>
    <!-- 动态插槽名 -->
    <template v-slot:[position]>
      <a href="#">注册</a>
    </template>

    <!-- 默认 default -->
    <template #>
      <div>啊</div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      position: 'right',
    };
  },
};
</script>
