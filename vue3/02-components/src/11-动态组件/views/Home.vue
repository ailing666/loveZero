<template>
  <div>
    <h2>Home组件: {{ name }} - {{ age }}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: ""
      },
      age: {
        type: Number,
        default: 0
      }
    },
  }
</script>
