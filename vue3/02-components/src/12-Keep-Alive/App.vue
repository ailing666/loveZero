<template>
  <div class="tabs">
    <template v-for="(item, index) in tabs" :key="index">
      <button :class="{ active: currentTab === item }" @click="itemClick(item)">
        {{ item }}
      </button>
    </template>
  </div>
  <div class="view">
    <!-- include: 组件的名称来自于组件定义时name选项  -->
    <keep-alive include="home,about">
      <component :is="currentTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './views/Home.vue';
import About from './views/About.vue';

export default {
  components: {
    Home,
    About,
  },
  data() {
    return {
      tabs: ['home', 'about'],
      currentTab: 'home',
    };
  },
  methods: {
    itemClick(tab) {
      this.currentTab = tab;
    },
    homeClick(payload) {
      console.log('homeClick:', payload);
    }
  }
};
</script>

<style scoped>
.active {
  color: red;
}
</style>
