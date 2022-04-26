<template>
  <el-dialog
    title="新增租车类型"
    :visible.sync="dialogVisible"
    class="cars-dialog-center"
    @close="close"
    width="30%"
    @opened="opened"
    :close-on-click-modal="false"
  >
    <CarForm ref="carForm" :formConfig="formConfig" :formData="formData" :formButton="formButton"> </CarForm>
  </el-dialog>
</template>

<script>
import CarForm from '@/components/CarForm'
import { LeaseAdd, LeaseEdit } from "@/api/sale"
export default {
  name: 'addSaleList',
  components: { CarForm },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      defult: () => ({})
    }
  },
  data () {
    return {
      // 弹窗显示/关闭标记
      dialogVisible: false,
      // 表单数据
      formData: {
        carsLeaseTypeName: "",
        carsLeaseStatus: "",
        carsLeaseDesc: ""
      },
      // 表单配置
      formConfig: [
        {
          type: 'input',
          label: '租车类型',
          prop: 'carsLeaseTypeName',
          required: true,
          rules: [{ min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }]
        },
        { type: "disabled", label: "禁/启状态", prop: "carsLeaseStatus", required: true },
        { type: "textarea", label: "描述", prop: "carsLeaseDesc" },
      ],
      // 表单按钮
      formButton: [
        {
          label: '确定',
          key: 'submit',
          type: 'danger',
          handler: () => this.submit()
        }
      ]
    }
  },
  watch: {
    isVisible (newV) {
      this.dialogVisible = newV
      this.formData = this.data
    }
  },
  methods: {
    // 弹窗打开时
    opened () { },
    // 表单提交
    submit () {
      this.$refs.carForm.$refs.form.validate(valid => {
        if (valid) {
          this.data.carsLeaseTypeId ? this.edit() : this.add()
        } else {
          return false
        }
      })
    },
    // 编辑
    async edit () {
      const res = await LeaseEdit({ ...this.formData })
      this.$message({
        type: 'success',
        message: res.message
      })
      // 重置表单
      this.close()
    },
    // 添加
    async add () {
      const res = await LeaseAdd({ ...this.formData })
      this.$message({
        type: 'success',
        message: res.message
      })
      // 重置表单
      this.close()
    },

    // 弹窗关闭
    close () {
      this.$emit('update:isVisible', false)
      this.$refs.carForm.reset()
    }
  }
}
</script>
<style lang="scss" scoped></style>
