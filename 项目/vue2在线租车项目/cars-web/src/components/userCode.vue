<template>
  <el-form-item prop="code" :rules="rules">
    <el-button class="v-code" :disabled="disabled" @click="getCode">
      {{ codeText }}
    </el-button>
    <el-input
      v-model="code"
      placeholder="手机验证码"
      @input="() => this.$emit('input', this.code)"
    ></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'UserCode',
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
      // 是否禁用按钮
      disabled: false,
      // 校验规则
      rules: [
        { required: true, message: "验证不能为空", trigger: "blur" },
        { min: 6, max: 6, message: "请输入6位字符的验证码", trigger: "change" }
      ]
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

      this.countdown()

    },
    // 倒计时
    countdown () {
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
    },
  }
}

</script>
<style lang='scss' scoped>
</style>