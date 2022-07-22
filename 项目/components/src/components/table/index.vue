<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column v-if="index" type="index" width="40"></el-table-column>
    <el-table-column
      v-if="checkbox"
      type="selection"
      width="40"
    ></el-table-column>
    <template v-for="item in column">
      <el-table-column
        v-if="item.type === 'function'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <div v-html="item.callback && item.callback(scope.row)"></div>
        </template>
      </el-table-column>
      <el-table-column
        v-if="item.type === 'slot'"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      >
        <template slot-scope="scope">
          <slot :name="item.slot_name" :data="scope.row" />
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :key="item.prop + 1"
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
    checkbox: Boolean,
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
    getTableList() {
      const url = this.url;
      if (!url) {
        console.log("请求地址不存在");
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
