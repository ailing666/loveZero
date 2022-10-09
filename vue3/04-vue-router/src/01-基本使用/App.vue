<template>
  <div>
    <!-- 点击可跳转到对应路由 -->
    <!-- replace:路由替换，点浏览器返回按钮不会返回到上一次路由 -->
    <router-link to="/home" replace>Home</router-link>
    <!-- 指定路由激活后的类名 -->
    <router-link to="/about" active-class="active">About</router-link>
    <!-- to参数可以是一个对象 -->
    <router-link :to="{ path: '/user/123' }" replace>User</router-link>

    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script setup></script>
<style>
.active {
  font-size: 24px;
  color: red;
}
</style>
