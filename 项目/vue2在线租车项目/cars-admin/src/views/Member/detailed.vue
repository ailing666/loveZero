<template>
  <ul class="detailed">
    <li>
      <label>用户名：</label>
      <span>{{ detailedData.username }}</span>
    </li>
    <li>
      <label>真实姓名：</label>
      <span>{{ detailedData.truename }}</span>
    </li>
    <li>
      <label>性别：</label>
      <span>{{ detailedData.gender === 1 ? '男' : '女' }}</span>
    </li>
    <li>
      <label>身份证（正面）</label>
      <span>
        <img :src="detailedData.cardPhotoFace" />
      </span>
    </li>
  </ul>
</template>

<script>
import { Detailed } from "@/api/member"
export default {
  name: 'Detailed',
  components: {},
  props: {},
  data () {
    return {
      id: this.$route.query.id,
      detailedData: {}
    }
  },
  beforeMount () {
    this.id && this.detailed()
  },
  methods: {
    detailed () {
      Detailed({ id: this.id }).then(res => {
        const data = res.data
        data && (this.detailedData = data)
      })
    }

  }
}
</script>
<style lang='scss' scoped>
.detailed {
  line-height: 34px;
  li {
    display: flex;
    label {
      width: 100px;
      font-weight: bold;
    }
    span {
      flex: 1;
    }
    img {
      width: 200px;
    }
  }
}
</style>