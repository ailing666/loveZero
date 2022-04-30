<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    class="cars-dialog-center"
    @close="close"
    :close-on-click-modal="false"
    width="40%"
  >
    <template v-if="img.length > 0">
      <img v-for="(item, index) in img" :key="index" :src="item" alt="" class="img-list" />
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "realPhoto",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    flagVisible: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      defult: () => { }
    }
  },
  data () {
    return {
      dialogVisible: false,
      img: []
    }
  },
  methods: {
    getPhoto () {
      const imgArr = []
      for (let key in this.data) {
        if (this.data[key]) {
          imgArr.push(this.data[key])
        }
      }
      this.img = imgArr
    },
    close () {
      // 关闭窗口
      this.dialogVisible = false
      this.$emit("update:flagVisible", false) // {}
    }
  },
  watch: {
    flagVisible (newV) {
      this.dialogVisible = newV
      this.getPhoto()
    }
  }
};
</script>
<style lang='scss' scoped>
.img-list {
  width: 100%;
  margin-bottom: 20px;
}
</style>