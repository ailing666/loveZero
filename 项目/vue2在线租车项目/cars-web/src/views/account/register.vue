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
        <el-form-item>
          <el-input
            v-model="form.password"
            placeholder="设置6位数字的密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="v-code">获取验证码</div>
          <el-input v-model="form.vCode" placeholder="手机验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        password: '',
        vCode: '',
      }
    }
  },
  methods: {}
}

</script>
<style lang='scss' scoped>
</style>