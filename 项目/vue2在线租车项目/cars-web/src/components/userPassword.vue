<template>
  <el-form-item prop="userPassword" :rules="rules">
    <el-input
      v-model="userPassword"
      placeholder="请输入密码"
      @input="() => this.$emit('input', this.userPassword)"
    ></el-input>
  </el-form-item>
</template>

<script>
import { validate_password } from '@/utils/validate'

export default {
  name: 'UserPassword',
  data() {
    // 手机号格式校验
    const validateUserPassword = (rule, value, callback) => {
      // 校验规则
      if (!this.userPassword || this.userPassword == '') {
        return callback(new Error('密码不能为空'))
      } else if (!validate_password(this.userPassword)) {
        return callback(new Error('密码为6~20的英文和数字组合'))
      } else {
        callback()
      }
    }
    return {
      // 手机号
      userPassword: '',
      rules: [{ validator: validateUserPassword, trigger: 'change' }]
    }
  }
}
</script>
<style lang="scss" scoped></style>
