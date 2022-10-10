<template>
  <ul>
    <li v-for="(item, index) in userStore.recommends" :key="index">
      {{ item.title }}
    </li>
  </ul>
</template>

<script setup>
import useUser from './stores/user';
const userStore = useUser();
userStore.fetchHomeMultidata().then(res => {
  console.log('fetchHomeMultidata的action已经完成了:', res);
});
</script>
