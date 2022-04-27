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
        <UserPhone :value.sync="form.username"></UserPhone>
        <Code :username="form.username" :value="form.code"></Code>
        <el-form-item>
          <el-button type="primary" class="submit">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import UserPhone from '../../components/userPhone.vue'
import Code from '../../components/code.vue'
export default {
  name: 'Register',
  components: { UserPhone, Code },
  data () {
    return {
      form: {
        username: '',
        password: '',
        code: '',
      }
    }
  },

  methods: {}
}

</script>
<style lang='scss' scoped>
</style>