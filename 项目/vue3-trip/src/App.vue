  <template>
    <tab-bar></tab-bar>
    <router-view></router-view>
    <app-loading></app-loading>
  </template>

  <script setup>
  import TabBar from "./components/TabBar.vue"
  import AppLoading from "./components/AppLoading.vue"
  </script>