<template>
  <div>
    <h2>{{ msg }}</h2>
    <slot></slot>
    <button @click="btnClick">changeTitle</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
  emits: ['changeTitle'],

  setup(props, context) {
    // 父组件props
    console.log(props);
    // 父组件传入的非props值
    console.log(context.attrs);
    function btnClick() {
      context.emit('changeTitle', 'changeTitle');
    }
    return {
      btnClick,
    };
  },
};
</script>
