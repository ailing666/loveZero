<template>
  <div class="app">
    <button @click="changeName('66')">changeName</button>
    <button @click="increment()">increment</button>
    <button @click="btnClick">btnClick</button>
    <button @click="CHANGE_INFO({ counter: 666, name: '小艾' })">CHANGE_INFO</button>
    <h2>Store Name: {{ $store.state.name }}</h2>
    <h2>Store counter: {{ $store.state.counter }}</h2>
  </div>
</template>

<script setup>
import { mapMutations, useStore } from 'vuex';
const store = useStore();

// 基本使用
function btnClick(){
  store.commit('increment')
}

// mapMutations
const mutations = mapMutations(['changeName', 'increment', 'CHANGE_INFO']);
const newMutations = {};
Object.keys(mutations).forEach(key => {
  newMutations[key] = mutations[key].bind({ $store: store });
});
const { changeName, increment, CHANGE_INFO } = newMutations;


</script>
