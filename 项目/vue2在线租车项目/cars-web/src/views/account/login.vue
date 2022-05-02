<template>
  <div class="user">
    <HeaderBack>
      <template #navHeaderRight>
        <router-link to="/register" class="color-white opacity-4"
          >注册</router-link
        >
      </template>
    </HeaderBack>
    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <UserPhone v-model="form.username"></UserPhone>
        <UserPassword v-model="form.password"></UserPassword>
        <el-form-item>
          <el-button type="primary" class="submit" @click="submit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="text-right">
      <router-link to="/forget" class="color-white opacity-4"
        >忘记密码</router-link
      >
    </div>
  </div>
</template>
<script>
import UserPhone from '@/components/userPhone.vue'
import UserPassword from '@/components/userPassword.vue'
import sha1 from 'js-sha1'
export default {
  name: 'Login',
  components: { UserPassword, UserPhone },
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.requestLogin()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    async requestLogin() {
      const { username, password } = this.form
      const res = await this.$store.dispatch('account/loginAction', {
        username,
        password: sha1(password)
      })
      this.$message({
        type: 'success',
        message: res.message
      })
      this.$router.push({ name: 'User' })
    }
  }
}
</script>
<style lang="scss" scoped></style>
