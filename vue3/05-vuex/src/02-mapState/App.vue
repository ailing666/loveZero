<template>
  <div class="app">
    <button @click="incrementCounter">修改counter</button>
    <h2>name: {{ $store.state.name }}</h2>
    <h2>counter: {{ $store.state.counter }}</h2>
  </div>
</template>

<script setup>
  import { computed, toRefs } from 'vue'
  import { mapState, useStore } from 'vuex'
  import useState from "./hooks/useState"
  // 使用封装好的useState
  const { name, counter } = useState(["name", "counter"])

  // 3.直接对store.state进行解构(推荐)
  const store = useStore()
  // const { name, counter } = toRefs(store.state)

  function incrementCounter() {
    store.state.counter++
  }

</script>
