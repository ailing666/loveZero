<template>
  <div class="user">
    <HeaderBack title="注册">
      <template #navHeaderRight>
        <router-link to="/login" class="color-white opacity-4"
          >登录</router-link
        >
      </template>
    </HeaderBack>
    <div class="cars-form-ui">
      <el-form ref="form" :model="form">
        <UserPhone v-model="form.username"></UserPhone>
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
import UserPhone from '../../components/userPhone.vue'
import UserCode from '../../components/userCode.vue'
export default {
  name: 'Register',
  components: { UserPhone, UserCode },
  data () {
    return {
      form: {
        username: '',
        password: '',
        code: '',
      }
    }
  },

  methods: {
    submit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log('验证通过', this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}

</script>
<style lang='scss' scoped>
</style>