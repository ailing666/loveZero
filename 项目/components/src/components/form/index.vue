<template>
  <el-form ref="form" :model="formData" label-width="80px">
    <template v-for="item in formConfig">
      <el-form-item
        v-if="item.type === 'input'"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        :rules="item.rules"
      >
        <el-input v-model="formData[item.prop]"></el-input>
      </el-form-item>
      <el-form-item
        v-if="item.type === 'select'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :rules="item.rules"
      >
        <el-select v-model="formData[item.prop]"></el-select>
      </el-form-item>
    </template>
    <el-form-item>
      <el-button
        v-for="item in formButton"
        :key="item.key"
        :loading="item.loading"
        :type="item.type"
        @click="handlerButton(item)"
        >{{ item.label }}</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
import { createRules } from "./createRules";
export default {
  props: {
    formConfig: { type: Array, default: () => [] },
    formData: { type: Object, default: () => ({}) },
    formButton: { type: Array, default: () => [] },
    beforeSubmit: Function,
    beforeReset: Function,
  },
  data() {
    return {};
  },

  beforeMount() {
    this.formConfig = createRules(this.formConfig);
  },
  methods: {
    handlerButton(data) {
      // 提交
      data.key === "submit" && this.submit(data);
      // 重置
      data.key === "reset" && this.reset(data);
      // 其他按钮
      data.callback && data.callback(this.formData);
    },
    submit(data) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (typeof this.beforeSubmit === "function") {
            this.$set(data, "loading", true);
            this.beforeSubmit()
              .then(() => {
                this.$set(data, "loading", false);
              })
              .catch(() => {
                this.$set(data, "loading", false);
              });
          }
        }
      });
    },
    reset(data) {
      this.$refs.form.resetFields();
      // 调用父组件函数
      data.callback && data.callback(this.formData);
    },
  },
};
</script>

<style></style>
