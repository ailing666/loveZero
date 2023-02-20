<template>
  <div class="department-container">
    <div class="app-container">
      <el-card>
        <!-- 用一个行列布局 -->
        <el-row type="flex" justify="space-between" align="middle" style="height: 40px">
          <el-col :span="20">
            <svg-icon icon-class="home" /><span>江苏传智播客教育科技股份有限公司</span>
          </el-col>
          <el-col :span="4">
            <el-row type="flex" justify="end">
              <!-- 两个内容 -->
              <el-col>负责人</el-col>
              <!-- 下拉菜单 element -->
              <el-col>
                <el-dropdown>
                  <span>
                    操作<i class="el-icon-arrow-down" />
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>添加子部门</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-tree
          :data="list"
          default-expand-all
          node-key="id"
        >
          <template v-slot="{ data }">
            <el-row type="flex" justify="space-between" align="middle" style="height: 40px; width: 100%;">
              <el-col :span="20">
                <span>{{ data.name }}</span>
              </el-col>
              <el-col :span="4">
                <el-row type="flex" justify="end">
                  <!-- 两个内容 -->
                  <el-col>{{ data.manager }}</el-col>
                  <!-- 下拉菜单 element -->
                  <el-col>
                    <el-dropdown>
                      <span>
                        操作<i class="el-icon-arrow-down" />
                      </span>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="showDialog(data.id)">添加子部门</el-dropdown-item>
                        <el-dropdown-item>查看部门</el-dropdown-item>
                        <el-dropdown-item>删除部门</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-tree>
        <el-dialog
          title="添加或修改"
          :close-on-click-modal="false"
          :close-on-press-escape="false"
          :visible.sync="dialogFormVisible"
        >
          <departmentsDialog :pid="curId" @closeDialog="closeDialog" />
        </el-dialog>
      </el-card>
    </div>
  </div>
</template>

<script>
import departmentsDialog from './departmentsDialog.vue'
import { getDepartments } from '@/api/departments'
import { tranListToTreeData } from '@/utils/index'
export default {
  components: { departmentsDialog },
  data() {
    return {
      list: [],
      dialogFormVisible: false,
      curId: ''
    }
  },
  created() {
    this.getDepartmentsList()
  },
  methods: {
    async getDepartmentsList() {
      const res = await getDepartments()
      res.data.depts.shift()
      this.list = tranListToTreeData(res.data.depts)
    },
    showDialog(id) {
      this.curId = id
      this.dialogFormVisible = true
    },
    closeDialog() {
      this.dialogFormVisible = false
      this.getDepartmentsList()
    }
  }
}
</script>

<style>

</style>
