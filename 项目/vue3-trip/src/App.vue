<template>
  <tab-bar v-show="!route.meta.hideTabBar" />
  <router-view v-slot="props">
    <keep-alive include="home">
      <component :is="props.Component"></component>
    </keep-alive>
  </router-view>
  <app-loading></app-loading>
</template>

<script setup>
import TabBar from './components/TabBar.vue';
import AppLoading from './components/AppLoading.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
