<template>
  <div class="user">
    <HeaderBack>
      <template #navHeaderRight>
        <router-link to="/login" class="color-white opacity-4"
          >登录</router-link
        >
      </template>
    </HeaderBack>
    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <UserPhone v-model="form.username"></UserPhone>
        <UserPassword v-model="form.password"></UserPassword>
        <UserPasswordConfirm
          :password="form.password"
          v-model="form.passwordConfirm"
        ></UserPasswordConfirm>
        <UserCode v-model="form.code" :username="form.username"></UserCode>
        <el-form-item>
          <el-button type="primary" class="submit" @click="submit"
            >确定</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import UserPhone from '@/components/userPhone.vue'
import UserPassword from '@/components/userPassword.vue'
import UserPasswordConfirm from '@/components/userPasswordConfirm.vue'
import UserCode from '@/components/userCode.vue'
import sha1 from 'js-sha1'

export default {
  name: 'Forget',
  components: { UserPassword, UserPasswordConfirm, UserPhone, UserCode },
  data() {
    return {
      form: {
        username: '',
        password: '',
        passwordConfirm: '',
        code: ''
      }
    }
  },

  methods: {
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.forgetRequest()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 注册
    async forgetRequest() {
      const { username, password, code } = this.form
      const res = await this.$store.dispatch('account/forgetAction', {
        username,
        password: sha1(password),
        code
      })
      this.$message({
        type: 'success',
        message: res.message
      })
      this.$router.replace({ name: 'Login' })
    }
  }
}
</script>
<style lang="scss" scoped></style>
