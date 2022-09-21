<template>
  <div class="app">
    <h2 ref="title" class="title">{{ message }}</h2>
    <banner ref="banner" />
  </div>
</template>

<script>
import Banner from './Banner.vue';
export default {
  components: {
    Banner,
  },

  mounted() {
    // 获取DOM元素
    console.log('h2', this.$refs.title);

    // 获取banner组件: 组件实例
    console.log('banner', this.$refs.banner);

    // 在父组件中可以主动的调用子组件的对象方法
    this.$refs.banner.bannerClick();

    // 获取banner组件实例, 获取banner中的元素
    console.log('banner.$el', this.$refs.banner.$el);
    // 获取根组件
    console.log('$root', this.$root);
  },
};
</script>