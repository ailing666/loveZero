<template>
  <div>{{ data[prop] }}</div>
</template>

<script>
import tableMinix from "@/utils/minix/tableMinix.js";
export default {
  name: "ComText",
  mixins: [tableMinix],
};
</script>

<style></style>
