<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="index">
        <button :class="{ active: currentTab === item }" @click="itemClick(item)">
          {{ item }}
        </button>
      </template>
    </div>
    <div class="view">
      <!-- is 绑定组件名 -->
      <component name="loveZero" :age="18" :is="currentTab"></component>
    </div>
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
    }
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>
