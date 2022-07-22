<template>
  <div>
    <a-table
      :column="column"
      selection
      index
      url="/api/name/"
      :requestParams="requestParams"
      :requestData="requestData"
      onLoad
      @onLoad="onLoad"
      :format="formatData"
      :checkList.sync="checkList"
    >
      <template #operation="slotData">
        <el-button type="primary" @click="goEdit(slotData.data)"
          >编辑</el-button
        >
      </template>
    </a-table>
  </div>
</template>
<script>
export default {
  name: "Table",
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
        // 根据sort_by字段排序
        { label: "年龄", prop: "age", sort: "custom", sort_by: "a.xx" },
        { label: "地址", prop: "address" },
        { label: "职业", prop: "profession", sort: true },
        {
          label: "操作",
          type: "slot",
          slot_name: "operation",
        },
      ],
      requestParams: {
        name: "requestParams",
      },
      requestData: {
        name: "requestData",
      },
      checkList: [],
    };
  },
  watch: {
    checkList(newV) {
      console.log("%cnewV: ", "color: #87a41d;", newV);
    },
  },
  methods: {
    goEdit(data) {
      console.log("%cgoEditdata: ", "color: #a16026;", data);
    },
    onLoad(data) {
      console.log("%conLoaddata: ", "color: #4430b9;", data);
    },
    // 格式化数据
    formatData(data) {
      return data.map((item) => ({
        ...item,
        phone: "1888888888",
      }));
    },
  },
};
</script>
