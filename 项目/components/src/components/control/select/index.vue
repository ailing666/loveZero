<template>
  <div>
    <el-select v-model="val" @change="selectChange">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      val: "",
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
    };
  },
  watch: {
    value: {
      handler(newValue) {
        this.val = newValue;
      },
      immediate: true,
    },
  },
  methods: {
    selectChange() {
      console.log(1);
      this.$emit("update:value", this.val);
    },
  },
};
</script>

<style></style>
