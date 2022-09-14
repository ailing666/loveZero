<template>
  <div>
    <el-input v-model="val" @input="inputEnter" />
  </div>
</template>

<script>
export default {
  name: "InputComponent",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      val: "",
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
    inputEnter() {
      this.$emit("update:value", this.val);
    },
  },
};
</script>

<style></style>
