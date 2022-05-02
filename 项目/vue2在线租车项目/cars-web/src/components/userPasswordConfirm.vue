<template>
  <el-form-item prop="userPasswordConfirm" :rules="rules">
    <el-input
      v-model="userPasswordConfirm"
      placeholder="请确认密码"
      @input="() => this.$emit('input', this.userPasswordConfirm)"
    ></el-input>
  </el-form-item>
</template>

<script>
import { validate_password } from '@/utils/validate'

export default {
  name: 'UserPasswordConfirm',
  props: {
    password: {
      type: String,
      default: ''
    }
  },
  data() {
    // 手机号格式校验
    const validateUserPasswordConfirm = (rule, value, callback) => {
      // 校验规则
      if (!this.userPasswordConfirm || this.userPasswordConfirm == '') {
        return callback(new Error('密码不能为空'))
      } else if (!validate_password(this.userPasswordConfirm)) {
        return callback(new Error('密码为6~20的英文和数字组合'))
      } else if (this.userPasswordConfirm && this.password !== this.userPasswordConfirm) {
        return callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      // 手机号
      userPasswordConfirm: '',
      rules: [{ validator: validateUserPasswordConfirm, trigger: 'change' }]
    }
  }
}
</script>
<style lang="scss" scoped></style>
