<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {
    document.addEventListener('mouseup', (e) => {
      e.preventDefault()

      // 获取车辆列表
      const carsWrap = document.getElementsByClassName('cars-wrap')[0]
      if (carsWrap && !carsWrap.contains(e.target)) {
        this.$store.commit('app/SET_IS_CARS_WARP', false)
      }
      // 获取到user
      const UserDom = document.getElementById('children-view')
      if (UserDom && !UserDom.contains(e.target)) {
        const routerName = this.$route.name
        if (routerName === 'Index') {
          return false
        }
        this.$router.push({
          name: 'Index'
        })
      }
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
#app {
}
</style>
