<template>
  <div class="home">
    <h2>当前计数: {{ $store.state.counter }}</h2>
    <button @click="incrementAction">发起mapActions修改counter</button>
    <button @click="increment">发起action修改counter</button>
    <h2>name: {{ $store.state.name }}</h2>
    <button @click="changeNameAction('bbbb')">发起action修改name</button>
  </div>
</template>

<script setup>
import { useStore, mapActions } from 'vuex';

const store = useStore();

// 使用mapActions辅助函数
const actions = mapActions(['incrementAction', 'changeNameAction']);
const newActions = {};
Object.keys(actions).forEach(key => {
  newActions[key] = actions[key].bind({ $store: store });
});
const { incrementAction, changeNameAction } = newActions;

// 使用默认的做法
function increment() {
  store.dispatch('incrementAction');
}

// 告诉Vuex发起网络请求
store.dispatch('fetchHomeMultidataAction').then(res => {
  console.log('home中的then被回调:', res);
});
</script>
