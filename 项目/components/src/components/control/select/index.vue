<template>
  <div>
    <el-select
      v-model="val"
      @change="handlerChange"
      :filterable="filterable"
      :remote="remote"
      :multiple="multiple"
      :collapse-tags="multiple"
      :remote-method="keywordRequest"
    >
      <el-option
        v-for="item in option"
        :key="item[defaultOptionMap.value]"
        :label="item[defaultOptionMap.label]"
        :value="item[defaultOptionMap.value]"
      >
        <slot name="select" :data="item"></slot>
      </el-option>
    </el-select>
  </div>
</template>

<script>
import formMinix from "@/utils/minix/formMinix.js";
export default {
  name: "SelectComponent",
  mixins: [formMinix],
  data() {
    return {
      val: "",
    };
  },
};
</script>

<style></style>
