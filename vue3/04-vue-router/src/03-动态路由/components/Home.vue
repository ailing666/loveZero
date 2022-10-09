<template>
  <div>
    <h2>Home</h2>

    <div class="home-nav">
      <router-link to="/home/about">about</router-link>
      <router-link to="/home/user">user</router-link>
    </div>
    <button @click="toUser">跳转到user</button>
    <button @click="toAbout">跳转到about</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
function toUser() {
  router.push({ path: '/home/user' });
}
function toAbout() {
  // query 参数
  router.push({ path: '/home/about', query: { id: 66 } });
}
</script>
