<template>
  <el-radio-group v-model="val" @change="handlerChange">
    <el-radio
      v-for="item in option"
      :key="item[defaultOptionMap.value]"
      :label="item[defaultOptionMap.label]"
      >{{ item[defaultOptionMap.label] }}</el-radio
    >
  </el-radio-group>
</template>
<script>
import formMinix from "@/utils/minix/formMinix.js";
export default {
  name: "RadioComponent",
  mixins: [formMinix],
  data() {
    return {
      val: [],
    };
  },
};
</script>
