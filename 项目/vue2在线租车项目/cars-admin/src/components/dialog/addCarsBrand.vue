<template>
  <el-dialog
    title="新增车辆品牌"
    :visible.sync="dialogVisible"
    class="cars-dialog-center"
    @close="close"
    @opened="opened"
    :close-on-click-modal="false"
  >
    <CarForm ref="carForm" :formConfig="formConfig" :formData="formData" :formButton="formButton">
      <template v-slot:logo>
        <div class="upload-img-wrap">
          <div class="upload-img">
            <img v-show="logoCurrent" :src="logoCurrent" />
          </div>
          <ul class="img-list">
            <li v-for="item in logoList" :key="item.id" @click="logoCurrent = item.img">
              <img :src="item.img" :alt="item.name" />
            </li>
          </ul>
        </div>
      </template>
    </CarForm>
  </el-dialog>
</template>

<script>
import CarForm from '@/components/CarForm'
import { BrandLogo, BrandAdd, BrandEdit } from '@/api/brand'
export default {
  name: 'AddCarsBrand',
  components: { CarForm },
  props: {
    isVisible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      defult: () => {}
    }
  },
  data() {
    return {
      // 弹窗显示/关闭标记
      dialogVisible: false,
      // 表单数据
      formData: {
        nameCh: '',
        nameEn: '',
        imgUrl: '',
        status: '',
        content: ''
      },
      // 表单配置
      formConfig: [
        {
          type: 'input',
          label: '品牌中文',
          prop: 'nameCh',
          required: true,
          rules: [{ min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }]
        },
        { type: 'input', label: '品牌英文', prop: 'nameEn' },
        {
          type: 'slot',
          slotName: 'logo',
          label: 'LOGO',
          prop: 'imgUrl',
          placeholder: '可停放车辆数',
          width: '200px',
          required: true
        },
        {
          type: 'radio',
          label: '禁启用',
          prop: 'status',
          options: this.$store.state.config.radio_disabled,
          required: true,
          rulesMsg: '请选择禁用或启用'
        }
      ],
      // 表单按钮
      formButton: [
        {
          label: '确定',
          key: 'submit',
          type: 'danger',
          handler: () => this.submit()
        }
      ],
      // 状态
      radioDisabled: this.$store.state.config.radio_disabled,
      // 选中的LOGO
      logoCurrent: '',
      // logo
      logoList: []
    }
  },
  watch: {
    isVisible(newV) {
      this.dialogVisible = newV
    }
  },
  methods: {
    // 弹窗打开时
    opened() {
      this.getBrandLogo()
      // 如果id存在，就将数据覆盖
      this.data.id && this.dataCover()
    },

    // 获取品牌LOGO
    async getBrandLogo() {
      // 存在数据时，不再请求接口
      if (this.logoList.length !== 0) return false
      // 没有数据时
      const res = await BrandLogo()
      const data = res.data
      data && (this.logoList = data)
    },

    // 获取详情
    dataCover() {
      this.formData = this.data
      this.logoCurrent = this.data.imgUrl
      this.formData.imgUrl = this.data.imgUrl
    },

    // 表单提交
    submit() {
      this.formData.imgUrl = this.logoCurrent
      this.$refs.carForm.$refs.form.validate(valid => {
        if (valid) {
          // 根据是否有id判断是修改还是新增
          this.data.id ? this.edit() : this.add()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    // 添加
    async add() {
      const res = await BrandAdd({ ...this.formData })
      this.$message({
        type: 'success',
        message: res.message
      })
      this.close()
    },

    // 修改
    async edit() {
      const res = await BrandEdit({ ...this.formData })
      this.$message({
        type: 'success',
        message: res.message
      })
      this.close()
    },

    // 重置表单
    reset() {
      for (let key in this.formData) {
        this.formData[key] = ''
      }
      this.$refs.carForm.reset()
      // 清除选中的LOGO
      this.logoCurrent = ''
    },

    // 弹窗关闭
    close() {
      this.reset()
      this.$emit('update:isVisible', false)
    }
  }
}
</script>
<style lang="scss" scoped></style>
