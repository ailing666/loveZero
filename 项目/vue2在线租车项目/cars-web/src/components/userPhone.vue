<template>
  <el-form-item>
    <el-input
      v-model="userPhone"
      placeholder="请输入手机号"
      v-on:input="change"
    ></el-input>
  </el-form-item>
</template>

<script>
import { validate_phone } from "@/utils/validate"
export default {
  name: 'UserPhone',
  data () {
    return {
      userPhone: ''
    }
  },
  methods: {
    change () {
      // 校验手机号
      const valiStatus = validate_phone(this.userPhone)
      let value = valiStatus ? this.userPhone : ""
      this.$emit("update:value", value)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>