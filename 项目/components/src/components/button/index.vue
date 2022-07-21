<template>
  <button class="a-button" :class="[theme]">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AButton",
  props: {
    type: {
      type: String,
      default: "",
    },
  },
  computed: {
    theme() {
      return this.type ? `a-button-${this.type}` : "";
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.a-button {
  padding: 0 20px;
  border-width: 1px;
  border-style: solid;
  border-color: #dcdfe6;
  border-radius: 4px;
  background-color: #fff;
  font-size: 14px;
  color: #606266;
  height: 40px;
}
.a-button[disabled] {
  opacity: 0.7;
  cursor: not-allowed;
}
.a-button-primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #409eff;
  }
}
.a-button-success {
  background-color: #00d100;
  border-color: #00d100;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #00d100;
  }
}
.a-button-wraning {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #e6a23c;
  }
}
.a-button-danger {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #f56c6c;
  }
}
/** 圆角 */
.is-round {
  border-radius: 100px;
}
</style>
