<template>
  <div>
    <a-table :column="column" selection index url="/api/name/">
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
        { label: "日期", prop: "create_date" },
        { label: "姓名", prop: "name" },
        {
          label: "邮箱",
          prop: "email",
          type: "function",
          callback: (data) => {
            return `<a href="http://www.baidu.com">http://www.baidu.com${data.email}</a>`;
          },
        },
        { label: "性别", prop: "sex" },
        { label: "手机", prop: "phone" },
        { label: "年龄", prop: "age" },
        { label: "地址", prop: "address" },
        { label: "职业", prop: "profession" },
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
