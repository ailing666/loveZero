<template>
  {{ msg }}
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello',
    };
  },
  created() {
    this.$mybus.on('changeMsg', (value)=>{
      this.msg = value
    })
  },
}
</script>

<style>

</style>