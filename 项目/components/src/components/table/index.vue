<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    @sort-change="sortChange"
  >
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
        :sortable="item.sort"
        :sortBy="item.sort_by"
        :width="item.width"
      >
        <template slot-scope="scope">
          <div v-html="item.callback && item.callback(scope.row)"></div>
        </template>
      </el-table-column>
      <!-- slot -->
      <el-table-column
        v-else-if="item.type === 'slot'"
        :sortable="item.sort"
        :key="`slot${item.prop}`"
        :prop="item.prop"
        :label="item.label"
        :sortBy="item.sort_by"
        :width="item.width"
      >
        <template slot-scope="scope">
          <slot :name="item.slot_name" :data="scope.row" />
        </template>
      </el-table-column>
      <!-- 普通文本 -->
      <el-table-column
        :key="item.props"
        :sortable="item.sort"
        v-else
        :prop="item.prop"
        :label="item.label"
        :sortBy="item.sort_by"
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
    // 表格列
    column: {
      type: Array,
      default: () => [],
    },
    // 多选
    selection: Boolean,
    // 索引
    index: Boolean,
    // 请求地址
    url: {
      type: String,
      default: "",
      require: true,
    },
    // 请求方法
    method: {
      type: String,
      default: "post",
      require: true,
    },
    // 请求params参数
    requestParams: {
      type: Object,
      default: () => ({}),
    },
    // 请求data参数
    requestData: {
      type: Object,
      default: () => ({}),
    },
    // 是否初始化请求数据
    isInit: {
      type: Boolean,
      default: true,
    },
    // 父组件是否需要接受子组件请求的参数
    onLoad: Boolean,
    // 格式化
    format: Function,
    // 多选框的值
    checkList: {
      type: Array,
      default: () => [],
    },
  },
  beforeMount() {
    this.isInit && this.getTableList();
  },
  methods: {
    // 请求表格数据
    getTableList() {
      // 判断url
      const url = this.url;
      if (!url) {
        console.error("请求地址不存在");
        return false;
      }
      // 参数处理
      const requestObject = {
        url: this.url,
        method: this.method,
      };
      if (JSON.stringify(this.requestData) !== "{}") {
        requestObject.data = this.requestData;
      }
      if (JSON.stringify(this.requestParams) !== "{}") {
        requestObject.params = this.requestParams;
      }
      // 请求接口
      this.$axios(requestObject).then((response) => {
        let res = response.data.data;
        // 数据格式化
        if (this.format && typeof this.format === "function") {
          res = this.format(response.data.data);
        }
        this.tableData = res;
        // 将参数上传给父组件
        this.onLoad && this.$emit("onLoad", response.data.data);
      });
    },
    // 多选框
    handleSelectionChange(val) {
      this.$emit("update:checkList", val);
    },
    // 供外部手动调用
    handleRequest() {
      this.getTableList();
    },
    // 远程排序
    sortChange({ column, prop, order }) {
      const sort_by = column.sortBy;
      console.log("%ccolumn: ", "color: #aafc5a;", column);
      // 传给后端
      console.log(sort_by, prop, order);
    },
  },
};
</script>

<style></style>
