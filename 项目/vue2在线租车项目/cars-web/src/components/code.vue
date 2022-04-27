<template>
  <el-form-item>
    <el-button class="v-code" :disabled="disabled" @click="getCode">
      {{ codeText }}
    </el-button>
    <el-input v-model="code" placeholder="手机验证码"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'Code',
  props: {
    username: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // 验证码
      code: '',
      // 文本
      codeText: '获取验证码',
      // 定时器
      timer: '',
      disabled: false
    }
  },
  methods: {
    getCode () {
      // 手机号填写后才能获取验证码
      if (!this.username) {
        this.$message({
          type: 'warning',
          message: '填写手机号才能获取验证码'
        })
        return
      }
      this.disabled = true
      let second = 5
      this.codeText = `倒计时${second}秒`

      this.timer = setInterval(() => {
        second--
        this.codeText = `倒计时${second}秒`
        if (second === 0) {
          // 再次初始化文本
          this.codeText = `重新获取`
          // 激活按钮
          this.disabled = false
          // 清除定时器
          clearInterval(this.timer)
        }
      }, 1000)
    }
  }
}

</script>
<style lang='scss' scoped>
</style>