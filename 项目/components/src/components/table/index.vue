<template>
  <el-table :data="tableData" style="width: 100%">
    <!-- 索引 -->
    <el-table-column v-if="index" type="index" width="55"></el-table-column>
    <!-- 多选框 -->
    <el-table-column
      v-if="selection"
      type="selection"
      width="55"
    ></el-table-column>
    <!-- 表格 -->
    <template v-for="item in column">
      <!-- function -->
      <el-table-column
        :key="item.prop"
        v-if="item.type === 'function'"
        :prop="item.prop"
        :label="item.label"
      >
        <template v-slot="scope">
          <div v-html="item.callback && item.callback(scope.row)"></div>
        </template>
      </el-table-column>
      <!-- 纯文本 -->
      <el-table-column
        v-else
        :key="item.prop + 1"
        :prop="item.prop"
        :label="item.label"
      ></el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          sex: "男",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          sex: "男",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          sex: "男",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          sex: "男",
        },
      ],
    };
  },
  props: {
    // 表格列
    column: {
      type: Array,
      default: () => [],
    },
    // 多选框
    selection: Boolean,
    // 索引
    index: Boolean,
  },
};
</script>

<style></style>
