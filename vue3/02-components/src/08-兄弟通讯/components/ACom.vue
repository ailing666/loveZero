<template>
  <button @click="changMsg">changMsg</button>
</template>

<script>
export default {
  methods: {
    changMsg() {
      this.$mybus.emit('changeMsg','hello bus')
    },
  },
};
</script>
