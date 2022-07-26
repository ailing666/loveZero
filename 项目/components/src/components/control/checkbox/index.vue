<template>
  <el-checkbox-group v-model="val" @change="handlerChange">
    <el-checkbox
      v-for="item in option"
      :key="item[defaultOptionMap.value]"
      :label="item[defaultOptionMap.label]"
      >{{ item[defaultOptionMap.label] }}</el-checkbox
    >
  </el-checkbox-group>
</template>
<script>
import formMinix from "@/utils/minix/formMinix.js";
export default {
  mixins: [formMinix],
  data() {
    return {
      val: [],
    };
  },
};
</script>
