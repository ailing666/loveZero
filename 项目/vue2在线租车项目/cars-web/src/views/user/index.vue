<template>
  <div class="user">
    <header>
      <img src="../../assets/images/user.jpg" alt />
      <div>
        <h4 class="name">123456789@qq.com</h4>
        <span>
          文明驾驶分
          <strong>0</strong>
        </span>
      </div>
    </header>
    <div class="group-link">
      <ul>
        <router-link to="/my" tag="a">
          <i class="icon icon-user-link-1"></i>
          我的帐户
        </router-link>
        <router-link to="order" tag="a">
          <i class="icon icon-user-link-2"></i>
          租车订单
        </router-link>
        <router-link to="authentication" tag="a">
          <i class="icon icon-user-link-3"></i>
          实名认证
        </router-link>
        <router-link to="/safe" tag="a">
          <i class="icon icon-user-link-4"></i>
          安全设置
        </router-link>
        <router-link to="aa" tag="a">
          <i class="icon icon-user-link-5"></i>
          帮助中心
        </router-link>
      </ul>
    </div>
    <button class="login-out" @click="loginOut">登出</button>
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {}
  },

  methods: {
    async loginOut() {
      await this.$store.dispatch('account/logoutAction')
      this.$router.replace({
        name: 'Login'
      })
    }
  }
}
</script>
<style lang="scss">
@import './index.scss';
</style>
