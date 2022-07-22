<template>
  <el-table :data="tableData" style="width: 100%">
    <!-- 索引 -->
    <el-table-column v-if="index" type="index" width="40"></el-table-column>
    <!-- 多选框 -->
    <el-table-column
      v-if="selection"
      type="selection"
      width="50"
    ></el-table-column>
    <!-- 表格内容 -->
    <template v-for="item in column">
      <!-- function -->
      <el-table-column
        v-if="item.type === 'function'"
        :prop="item.prop"
        :key="`function${item.prop}`"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <div v-html="item.callback && item.callback(scope.row)"></div>
        </template>
      </el-table-column>
      <!-- slot -->
      <el-table-column
        v-else-if="item.type === 'slot'"
        :key="`slot${item.prop}`"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <slot :name="item.slot_name" :data="scope.row" />
        </template>
      </el-table-column>
      <!-- 普通文本 -->
      <el-table-column
        :key="item.props"
        v-else
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      ></el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  props: {
    column: {
      type: Array,
      default: () => [],
    },
    selection: Boolean,
    index: Boolean,
    url: {
      type: String,
      default: "",
      require: true,
    },
    method: {
      type: String,
      default: "post",
      require: true,
    },
  },
  beforeMount() {
    this.getTableList();
  },
  methods: {
    // 请求表格数据
    getTableList() {
      const url = this.url;
      if (!url) {
        console.error("请求地址不存在");
        return false;
      }
      this.$axios({
        url: this.url,
        method: this.method,
      }).then((response) => {
        this.tableData = response.data.data;
      });
    },
  },
};
</script>

<style></style>
