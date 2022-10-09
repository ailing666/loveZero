<template>
  <div>
    <h2>Home</h2>

    <div class="home-nav">
      <router-link to="/home/about">about</router-link>
      <router-link to="/home/user">user</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup></script>
