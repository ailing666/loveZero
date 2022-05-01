<template>
  <div class="user">
    <HeaderBack />
    <ul class="menu">
      <li :class="{ current: type === 'identity' }" @click="type = 'identity'">
        身份证上传
      </li>
      <li :class="{ current: type === 'drive' }" @click="type = 'drive'">
        驾驶证上传
      </li>
    </ul>
    <div class="upload-wrap">
      <UploadVue ref="upload" />
      <p class="text">正面</p>
    </div>
    <div class="upload-wrap">
      <UploadVue ref="upload" />
      <p class="text">反面</p>
    </div>
    <div class="upload-wrap" v-if="type === 'identity'">
      <UploadVue ref="upload" />
      <p class="text">手持免冠</p>
    </div>
    <div class="blank-40"></div>
    <el-button type="primary" class="submit" round>提交身份证认证</el-button>
  </div>
</template>
<script>
import UploadVue from "@/components/upload.vue"
export default {
  name: "Authentication",
  components: { UploadVue },
  data () {
    return {
      type: "identity"
    }
  },

}
</script>
<style lang="scss">
.menu {
  text-align: center;
  margin-bottom: 40px;
  li {
    display: inline-block;
    position: relative;
    font-size: 14px;
    opacity: 0.5;
    padding: 0 40px 15px;
    color: #fff;
    cursor: pointer;
    &.current {
      opacity: 1;
      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -15px;
        width: 30px;
        height: 4px;
        border-radius: 10px;
        background-color: #00a3ff;
      }
    }
  }
}
.upload-wrap {
  .text {
    padding: 15px 0;
    color: #fff;
    opacity: 0.5;
    text-align: center;
  }
}
</style>