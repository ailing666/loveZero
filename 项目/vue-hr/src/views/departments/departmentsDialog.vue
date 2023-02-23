<template>
  <el-form ref="deptForm" :rules="rules" :model="form" label-width="120px">
    <el-form-item label="部门名称" prop="name">
      <el-input v-model="form.name" style="width:80%" placeholder="1-50个字符" />
    </el-form-item>
    <el-form-item label="部门编码" prop="code">
      <el-input v-model="form.code" style="width:80%" placeholder="1-50个字符" />
    </el-form-item>
    <el-form-item label="部门负责人" prop="manager">
      <el-select v-model="form.manager" style="width:80%" placeholder="请选择">
        <el-option v-for="item in managerList" :key="item.id" :value="item.username" :label="item.username" />
      </el-select>
    </el-form-item>
    <el-form-item label="部门介绍" prop="introduce">
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
    },
    originList: {
      type: Array,
      required: true
    }
  },
  data() {
    const validCode = (rule, value, callback) => {
      let existCodeList = this.originList.map(item => item.code)
      if (this.isEdit) {
        console.log('现在是编辑状态，正在编辑的id是', this.pid)
        existCodeList = this.originList.filter(item => item.id !== this.pid).map(item => item.code)
      }
      existCodeList.includes(value)
        ? callback(new Error('编码' + value + '已经存在'))
        : callback()
    }

    const validName = (rule, value, callback) => {
      // 同级下的所有name
      let existNameList = this.originList.filter(item => item.pid === this.pid).map(item => item.name)
      // 编辑时要将自己移除
      console.log(existNameList)
      if (this.isEdit) {
        const dept = this.originList.find(item => item.id === this.pid)
        const pid = dept.pid
        existNameList = this.originList.filter(item => item.pid === pid && item.id !== this.pid).map(item => item.name)
      }
      existNameList.includes(value) ? callback(new Error('名字' + value + '已经被占用了')) : callback()
    }
    return {
      form: {
        name: '', // 部门名称
        code: '', // 部门编码
        manager: '', // 部门管理者
        introduce: '' // 部门介绍
      },
      managerList: [],
      rules: {
        name: [
          { required: true, message: '部门名称不能为空', trigger: 'blur' },
          { min: 1, max: 50, message: '部门名称要求1-50个字符', trigger: 'blur' },
          { validator: validName, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '部门编码不能为空', trigger: 'blur' },
          { min: 1, max: 50, message: '部门编码要求1-50个字符', trigger: 'blur' },
          { validator: validCode, trigger: 'blur' }
        ],
        manager: [
          { required: true, message: '部门负责人不能为空', trigger: 'blur' }
        ],
        introduce: [
          { required: true, message: '部门介绍不能为空', trigger: 'blur' },
          { min: 1, max: 300, message: '部门介绍要求1-300个字符', trigger: 'blur' }
        ]
      }
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

    hSubmit() {
      this.$refs.deptForm.validate(async valid => {
        if (valid) {
          // 发起请求
          this.isEdit ? await updateDepartments(this.form) : await addDepartments({ ...this.form, pid: this.pid })
          // 关闭弹窗
          this.$emit('closeDialog')
        }
      })
    },
    hCancel() {
      // 关闭弹窗
      this.$emit('closeDialog')
    }
  }
}
</script>

<style>

</style>
