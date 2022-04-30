<template>
  <CarForm
    ref="carForm"
    :formLoading="formLoading"
    :formData="formData"
    :formConfig="formConfig"
    :formButton="formButton"
  >
    <!-- 保养日期 -->
    <template v-slot:maintain>
      <el-row :gutter="30">
        <el-col :span="6">
          <el-date-picker
            v-model="formData.maintainDate"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          ></el-date-picker>
        </el-col>
        <el-col :span="6">下次保养日期：2020-12-12</el-col>
      </el-row>
    </template>
    <!-- 能源类型 -->
    <template v-slot:energy>
      <el-radio-group v-model="formData.energyType" @change="changeEnergyType">
        <el-radio :label="1">电</el-radio>
        <el-radio :label="2">油</el-radio>
        <el-radio :label="3">混合动力</el-radio>
      </el-radio-group>
      <div class="progress-bar-wrap" v-if="formData.energyType == 3 || formData.energyType == 1">
        <span class="label-text">电量：</span>

        <el-row :gutter="20">
          <el-col :span="10">
            <el-slider v-model="formData.electric" show-input></el-slider>
          </el-col>
        </el-row>
      </div>
      <div class="progress-bar-wrap" v-if="formData.energyType === 3 || formData.energyType == 2">
        <span class="label-text">油量：</span>
        <el-row :gutter="20">
          <el-col :span="10">
            <el-slider v-model="formData.oil" show-input></el-slider>
          </el-col>
        </el-row>
      </div>
    </template>
    <!-- 车辆属性 -->
    <template v-slot:carsAttr>
      <AddCarsAttrList
        ref="AddCarsAttrList"
        :oil="formData.oil"
        :countKm.sync="formData.countKm"
        :initValue="formData.carsAttr"
        :value.sync="formData.carsAttr"
      />
    </template>
    <!-- 租赁价格 -->
    <template v-slot:leaseList>
      <el-row :gutter="20">
        <el-col :span="4" v-for="item in formData.leasePrice" :key="item.carsLeaseTypeId">
          <div>{{ item.carsLeaseTypeName }}</div>
          <el-input-number
            v-model="item.price"
            controls-position="right"
            :min="0"
            :max="10000"
            placeholder="请输入价格"
            style="width: 100%"
          ></el-input-number>
        </el-col>
      </el-row>
    </template>
  </CarForm>
</template>
<script>
import CarForm from '@c/CarForm'
import { LeaseList } from "@/api/sale"
import AddCarsAttrList from '@c/addCarsAttrList'
import { GetCarsBrand, GetParking } from '@/api/common'
import { CarsAdd, CarsEdit, CarsDetailed } from '@/api/cars'

export default {
  name: 'CarsAdd',
  components: { CarForm, AddCarsAttrList },
  data () {
    return {
      id: this.$route.query.id,
      carsAttrList: [],
      formConfig: [
        {
          type: 'select',
          label: '车辆品牌',
          placeholder: '请选择车辆品牌',
          prop: 'carsBrandId',
          select_vlaue: 'id', // 自有的私有属性
          select_label: 'nameCh',
          required: true,
          options: []
        },
        {
          type: 'select',
          label: '停车场',
          placeholder: '请选择停车场',
          select_vlaue: 'id', // 自有的私有属性
          select_label: 'parkingName',
          prop: 'parkingId',
          required: true,
          options: []
        },
        {
          type: 'input',
          label: '车辆型号',
          placeholder: '请输入车辆型号',
          prop: 'carsMode',
          required: true
        },
        {
          type: 'input',
          label: '车牌号',
          placeholder: '请输入车牌号',
          prop: 'carsNumber',
          required: true
        },
        {
          type: 'input',
          label: '车架号',
          placeholder: '请输入车架号',
          prop: 'carsFrameNumber',
          required: true
        },
        {
          type: 'input',
          label: '发动机号',
          placeholder: '请输入发动机号',
          prop: 'engineNumber',
          required: true
        },
        {
          type: 'radio',
          label: '年检',
          placeholder: '请选择年检',
          prop: 'yearCheck',
          options: this.$store.state.config.year_check,
          required: true
        },
        {
          type: 'slot',
          slotName: 'maintain',
          prop: 'maintainDate',
          label: '保养日期',
          required: true
        },
        {
          type: 'radio',
          label: '档位',
          placeholder: '请选择档位',
          prop: 'gear',
          options: this.$store.state.config.gear,
          required: true
        },
        {
          type: 'slot',
          slotName: 'energy',
          prop: 'energyType',
          label: '能源类型',
          required: true
        },
        {
          type: 'input',
          label: '可行驶公里',
          prop: 'countKm'
        },
        {
          type: 'disabled',
          label: '禁启用',
          placeholder: '请选择禁启用',
          prop: 'status',
          required: true
        },
        {
          type: 'upLoad',
          prop: 'carsImg',
          label: '图片上传'
        },
        {
          type: 'slot',
          slotName: 'carsAttr',
          prop: 'carsAttr',
          label: '车辆属性'
        },
        {
          type: "slot",
          slotName: "leaseList",
          prop: "lease",
          label: "租赁价格"
        },
        {
          type: 'editor',
          prop: 'content',
          label: '车辆描述'
        }
      ],
      formButton: [
        { label: '确定', key: 'submit', type: 'danger', handler: () => this.formSubmit() },
        { label: '重置', key: 'reset', handler: () => this.resetForm() }
      ],
      formData: {
        parkingId: '',
        carsBrandId: '',
        carsMode: '',
        carsNumber: '',
        carsFrameNumber: '',
        engineNumber: '',
        yearCheck: false,
        gear: 1,
        energyType: 1,
        electric: 0,
        carsImg: '',
        oil: 0,
        countKm: '',
        carsAttr: '',
        content: '',
        maintainDate: '',
        status: true,
        leasePrice: []
      },
      // 车辆品牌列表
      carsBrandList: [],
      formLoading: false,
    }
  },
  beforeMount () {
    this.getCarsBrandList()
    this.getParkingList()
    this.getLeaseList()
    // 如果是修改就请求车辆详情
    this.id && this.getCarsDetailed()
  },

  methods: {
    // 获取车辆品牌
    async getCarsBrandList () {
      const res = await GetCarsBrand()
      const data = res.data.data
      if (data && data.length > 0) {
        const carsBrand = this.formConfig.filter(item => item.prop == 'carsBrandId')
        // 将品牌列表赋值给对应的options
        carsBrand.length > 0 && (carsBrand[0].options = data)
      }
    },

    // 获取停车场
    async getParkingList () {
      const res = await GetParking()
      const data = res.data.data
      if (data && data.length > 0) {
        const parking = this.formConfig.filter(item => item.prop == 'parkingId')
        // 将停车场列表赋值给对应的options
        parking.length > 0 && (parking[0].options = data)
      }
    },

    /** 获取租赁列表 */
    async getLeaseList () {
      const res = await LeaseList()
      const data = res.data.data
      if (data) { this.formData.leasePrice = data }
    },

    // 获取车辆详情
    async getCarsDetailed () {
      const res = await CarsDetailed({ id: this.id })
      Object.keys(this.formData).map(item => {
        this.formData[item] = res.data[item]
      })
    },

    // 提交表单
    formSubmit () {
      // 获取属性
      this.$refs.AddCarsAttrList.setAttrList()
      this.$refs.carForm.$refs.form.validate(valid => {
        valid && this.requestCars()
      })
    },

    // 请求接口
    async requestCars () {
      // 根据id判断是编辑还是新增
      let api = this.id ? CarsEdit : CarsAdd
      let requestData = { ...this.formData, leasePrice: this.formData.leasePrice }
      // 编辑需要携带id
      this.id && (requestData.id = this.id)

      this.formLoading = true
      try {
        const res = await api(requestData)
        // 重置表单
        this.resetForm()
        this.formLoading = false
        this.$message({
          message: res.message,
          type: 'success'
        })
        this.$router.push({ name: 'CarsIndex' })
      } catch {
        this.formLoading = false
      }
    },

    // 重置表单
    resetForm () {
      // form表单重置
      this.$refs.carForm.reset()
      // 车辆属性
      this.carsAttrList = []
    },

    // 改变能源类型清空值
    changeEnergyType () {
      this.formData.electric = 0
      this.formData.oil = 0
    }
  }
}
</script>
<style lang="scss">
.progress-bar-wrap {
  padding-left: 50px;
  margin-top: 10px;
  position: relative;
  .label-text {
    position: absolute;
    left: 0;
  }
}
.progress-bar {
  height: 10px;
  width: 100%;
  border-radius: 50px;
  background-color: #ccc;
  margin-top: 15px;
  span {
    position: relative;
    display: block;
    height: 100%;
    background-color: #409eff;
    border-radius: 50px;
  }
  label {
    position: absolute;
    right: 0;
    bottom: 10%;
  }
}
.cars-attr-list {
  margin-bottom: 15px;
  overflow: hidden;
}
</style>
