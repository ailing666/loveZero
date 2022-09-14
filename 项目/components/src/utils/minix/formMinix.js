export default {
  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: [String, Number, Array],
      default: "",
    },
  },
  data() {
    return {
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
    // 本地搜索
    filterable() {
      return this.config?.filterable;
    },
    // 远程搜索
    remote() {
      return this.config?.remote;
    },
    keyword() {
      return this.config?.keyword || "keyword";
    },
    multiple() {
      return this.config?.multiple;
    },
  },
  watch: {
    value: {
      handler(newValue) {
        console.log("%cnewValue: ", "color: #c20fcf;", newValue);
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
    handlerChange(value) {
      console.log("%cthis.val: ", "color: #ebe131;", this.val);
      this.$emit("update:value", this.val);
      this.config.callback && this.config.callback(value);
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
      this.initRequest && this.requestData();
    },
    // 远程搜索
    keywordRequest(query) {
      query && this.remote && this.requestData(query);
    },
    // 请求
    requestData(value) {
      const requestData = {
        url: this.url,
        method: this.method,
      };
      // 搜索请求需参数
      if (this.method === "get") {
        requestData.params = value ? { [this.keyword]: value } : {};
      }
      if (this.method === "post") {
        requestData.data = value ? { [this.keyword]: value } : {};
      }
      // 接口的请求
      this.$axios(requestData).then((res) => {
        this.option = res.data.data;
      });
    },
  },
};
