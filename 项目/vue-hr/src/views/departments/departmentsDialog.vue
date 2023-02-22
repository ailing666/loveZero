<template>
  <el-form ref="deptForm" label-width="120px">
    <el-form-item label="部门名称">
      <el-input v-model="form.name" style="width:80%" placeholder="1-50个字符" />
    </el-form-item>
    <el-form-item label="部门编码">
      <el-input v-model="form.code" style="width:80%" placeholder="1-50个字符" />
    </el-form-item>
    <el-form-item label="部门负责人">
      <el-select v-model="form.manager" style="width:80%" placeholder="请选择">
        <el-option v-for="item in managerList" :key="item.id" :value="item.username" :label="item.username" />
      </el-select>
    </el-form-item>
    <el-form-item label="部门介绍">
      <el-input v-model="form.introduce" style="width:80%" placeholder="1-300个字符" type="textarea" :rows="3" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="small" @click="hSubmit">确定</el-button>
      <el-button size="small" @click="hCancel">取消</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
import { getEmployeeSimple } from '@/api/employees'
import { addDepartments, getDepartDetail, updateDepartments } from '@/api/departments'

export default {
  props: {
    pid: {
      type: String,
      required: true
    },
    isEdit: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      form: {
        name: '', // 部门名称
        code: '', // 部门编码
        manager: '', // 部门管理者
        introduce: '' // 部门介绍
      },
      managerList: []
    }
  },
  created() {
    this.loadManagerList()
    this.isEdit && this.loadDepartDetail()
  },
  methods: {
    async loadManagerList() {
      const res = await getEmployeeSimple()
      this.managerList = res.data
    },
    async loadDepartDetail() {
      const res = await getDepartDetail(this.pid)
      this.form = res.data
    },

    async hSubmit() {
      // 发起请求
      this.isEdit ? await updateDepartments(this.form) : await addDepartments({ ...this.form, pid: this.pid })
      // 关闭弹窗
      this.$emit('closeDialog')
    },
    hCancel() {}
  }
}
</script>

<style>

</style>
