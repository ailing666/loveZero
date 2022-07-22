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
  </el-form>
</template>

<script>
import { createRules } from "./createRules";
export default {
  props: {
    formConfig: {
      type: Array,
      default: () => [],
    },
    formData: { type: Object, default: () => ({}) },
  },
  data() {
    return {};
  },
  beforeMount() {
    this.formConfig = createRules(this.formConfig);
  },
};
</script>

<style></style>
