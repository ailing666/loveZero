<template>
  <el-row>
    <el-col :span="12">
      <span class="menu-btn" @click="switchAside">
        <svg-icon icon="menuBtn" class="icon-menu-btn"></svg-icon>
      </span>
    </el-col>
    <el-col :span="12">
      <span class="logout" @click="logout">
        <svg-icon icon="logout" class="icon-logout"></svg-icon>
      </span>
      <div class="face-info">
        <img src="../../../assets/face.png" :alt="username" />
        <span class="name">{{ username }}</span>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'LayoutHeader',
  components: {},
  props: {},
  computed: {
    username() {
      return this.$store.state.app.username
    }
  },
  methods: {
    switchAside() {
      this.$store.commit('app/SET_COLLAPSE')
    },
    logout() {
      this.$confirm('确认退出管理后台', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('app/logoutAction').then(response => {
          this.$message({
            message: response.message,
            type: 'success'
          })
          this.$router.push({
            name: 'Login'
          })
        })
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.menu-btn {
  display: inline-block;
  padding-top: 24px;
  cursor: pointer;
}
.logout {
  float: right;
  border-left: 1px solid #ededed;
  width: 75px;
  text-align: center;
  line-height: 75px;
  font-size: 25px;
  margin-right: -20px;
  cursor: pointer;
}
.face-info {
  float: right;
  padding: 18px 30px 0 0;
  img {
    display: inline-block;
    vertical-align: middle;
    border-radius: 100px;
    margin-right: 18px;
  }
}
</style>
