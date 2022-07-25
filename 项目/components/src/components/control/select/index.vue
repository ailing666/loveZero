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
  computed: {
    url() {
      return this.config?.url;
    },
    // 是否初始化请求
    initRequest() {
      return this.config?.init;
    },
    method() {
      return this.config?.method || "get";
    },
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
      // 请求接口
      if (this.url) {
        this.fetchOptions();
        return false;
      }
      // 外部配置
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
    // 远程请求option
    fetchOptions() {
      if (!this.initRequest) return false;
      const requestData = {
        url: this.url,
        method: this.method,
      };
      // 接口的请求
      this.$axios(requestData).then((res) => {
        this.option = res.data.data;
      });
    },
  },
};
</script>

<style></style>
