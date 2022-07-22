export default {
  props: {
    prop: {
      type: String,
      default: "",
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    config: {
      type: Object,
      default: () => ({}),
    },
  },
};
