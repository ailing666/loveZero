<template>
  <el-form-item prop="userPhone" :rules="rules">
    <el-input
      v-model="userPhone"
      placeholder="请输入手机号"
      @input="() => this.$emit('input', this.userPhone)"
    ></el-input>
  </el-form-item>
</template>

<script>
import { validate_phone } from '@/utils/validate'

export default {
  name: 'UserPhone',
  data() {
    // 手机号格式校验
    const validateUserPhone = (rule, value, callback) => {
      if (!this.userPhone || this.userPhone == '') {
        return callback(new Error('手机号不能为空'))
      } else if (!validate_phone(this.userPhone)) {
        return callback(new Error('手机号格式不正确'))
      } else {
        callback()
      }
    }
    return {
      // 手机号
      userPhone: '',
      rules: [{ validator: validateUserPhone, trigger: 'change' }]
    }
  }
}
</script>
<style lang="scss" scoped></style>
