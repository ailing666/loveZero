<template>
  <div v-html="config.callback && config.callback(data)"></div>
</template>

<script>
import tableMinix from "@/utils/minix/tableMinix.js";
export default {
  name: "ComFunction",
  mixins: [tableMinix],
};
</script>

<style></style>
