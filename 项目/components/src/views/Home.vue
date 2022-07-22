<template>
  <div>
    <a-table :column="column" selection index>
      <template #operation="slotData">
        <el-button type="primary" @click="goEdit(slotData.data)"
          >编辑</el-button
        >
      </template>
    </a-table>
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
        {
          label: "URL",
          prop: "url",
          type: "function",
          callback: (data) => {
            return `<a href="http://www.baidu.com">${data.name}</a>`;
          },
        },
        { label: "日期", prop: "date" },
        { label: "名称", prop: "name" },
        { label: "地址", prop: "address" },
        { label: "性别", prop: "sex" },
        {
          label: "操作",
          type: "slot",
          slot_name: "operation",
        },
      ],
    };
  },
  methods: {
    goEdit(data) {
      console.log("%cdata: ", "color: #a16026;", data);
    },
  },
};
</script>
