<template>
  <div class="home">
    <h2>Counter模块的counter: {{ $store.state.counter.count }}</h2>
    <h2>Counter模块的getters: {{ $store.getters['counter/doubleCount'] }}</h2>
    <button @click="incrementCount">count模块mutations+1</button>
    <button @click="incrementCountAction">count模块action+1</button>

    <ul>
      <li v-for="(item, index) in $store.state.home.banners" :key="index">
        {{ item.height }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

onMounted(() => {
  store.dispatch('home/fetchHomeMultidataAction');
});

function incrementCountAction() {
  store.dispatch('counter/incrementCountAction');
}
function incrementCount() {
  store.commit('counter/incrementCount');
}
</script>
