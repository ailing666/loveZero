<template>
  <h2>{{counter}}</h2>
  <button @click="counter++">+1</button>

  <div>
    <button @click="isShowHome = !isShowHome">显示Home</button>
    <home v-if="isShowHome"></home>
  </div>
</template>

<script>
  import Home from "./Home.vue"
  export default {
    components: {
      Home
    },
    data() {
      return {
        counter: 0,
        isShowHome: true
      }
    },
    // 组件被创建之前
    beforeCreate() {
      console.log("beforeCreate")
    },
    // 组件被创建完成
    created() {
      console.log("created")
    },
    // 组件template准备被挂载
    beforeMount() {
      console.log("beforeMount")
    },
    // 组件template被挂载: 虚拟DOM -> 真实DOM
    mounted() {
      console.log("mounted")
    },
    // 数据发生改变
    // 准备更新DOM
    beforeUpdate() {
      console.log("beforeUpdate")
    },
    // 更新DOM
    updated() {
      console.log("updated")
    }
  }
</script>
