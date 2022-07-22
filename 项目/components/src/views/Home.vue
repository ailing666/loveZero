<template>
  <div>
    <a-table :column="column" selection index></a-table>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    "a-table": () => import("@/components/table"),
  },
  data() {
    return {
      column: [
        { label: "日期", prop: "date" },
        { label: "名称", prop: "name" },
        { label: "地址", prop: "address" },
        { label: "性别", prop: "sex" },
      ],
    };
  },
};
</script>
