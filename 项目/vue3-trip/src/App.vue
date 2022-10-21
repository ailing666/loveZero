<template>
  <tab-bar v-if="!route.meta.hideTabBar" />
  <router-view></router-view>
  <app-loading></app-loading>
</template>

<script setup>
import TabBar from './components/TabBar.vue';
import AppLoading from './components/AppLoading.vue';
import { useRoute } from 'vue-router';
const route = useRoute();
</script>
