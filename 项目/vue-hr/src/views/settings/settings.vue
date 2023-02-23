<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs>
          <!-- 放置页签 -->
          <el-tab-pane label="角色管理">
            <!-- 新增角色按钮 -->
            <el-row style="height:60px">
              <el-button
                icon="el-icon-plus"
                size="small"
                type="primary"
              >新增角色</el-button>
            </el-row>
            <!-- 表格 -->
            <el-table :data="roles" style="width: 100%">
              <!-- type:index会自动生成序号 -->
              <el-table-column label="序号" type="index" width="50" />
              <el-table-column prop="name" label="角色名称" width="180" />
              <el-table-column prop="description" label="描述" />
              <el-table-column width="300" label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" type="success">分配权限</el-button>
                  <el-button size="mini">编辑</el-button>
                  <el-button size="mini" type="danger">删除</el-button>
                </template>
              </el-table-column>
            </el-table>

            <el-row type="flex" justify="center" align="middle" style="height: 60px">
              <!-- 分页组件 -->
              <el-pagination layout="prev,pager,next" />
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getRoles } from '@/api/setting'
export default {

  data() {
    return {
      activeName: 'first',
      roles: [],
      total: 0
    }
  },
  created() {
    this.loadRoles()
  },
  methods: {
    async loadRoles() {
      try {
        const res = await getRoles()
        this.roles = res.data.rows
        this.total = res.total
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style>

</style>
