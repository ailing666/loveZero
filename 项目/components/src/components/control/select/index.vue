<template>
  <div>
    <el-select v-model="val" @change="selectChange">
      <el-option
        v-for="item in option"
        :key="item[defaultOptionMap.value]"
        :label="item[defaultOptionMap.label]"
        :value="item[defaultOptionMap.value]"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      val: "",
      option: [],
      defaultOptionMap: {
        label: "label",
        value: "value",
      },
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
  beforeMount() {
    this.initOptions();
    this.initOptionsMap();
  },
  methods: {
    selectChange() {
      this.$emit("update:value", this.val);
    },
    // 初始化option
    initOptions() {
      const option = this.config.options;
      if (option && Array.isArray(option) && option.length > 0) {
        this.option = option;
      }
    },
    // 初始化option映射
    initOptionsMap() {
      // 外部传来的options映射
      const optionsMap = this.config.optionsMap;
      if (
        optionsMap &&
        Object.prototype.toString.call(optionsMap) === "[object Object]"
      ) {
        this.defaultOptionMap = optionsMap;
      }
    },
  },
};
</script>

<style></style>
