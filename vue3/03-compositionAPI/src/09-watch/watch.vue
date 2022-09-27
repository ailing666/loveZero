<template>
  <h2>{{msg}}</h2>
  <h2>{{info.data.number}}</h2>
  <button @click="msg = '666'">修改msg</button>
  <button @click="info.data.number = '999'">修改number</button>
</template>

<script>
  import { reactive, ref, watch } from 'vue'

  export default {
    setup() {
      const msg = ref("Hello World")
      const info = reactive({
        name: "loveZero",
        data: {
          number: "007"
        }
      })

      // 监听基本数据类型
      watch(msg, (newValue, oldValue) => {
        console.log('msg',newValue, oldValue)
      })

      // 监听复杂数据类型
      watch(info, (newValue, oldValue) => {
        console.log('info',newValue, oldValue)
        console.log(newValue === oldValue)
      }, {
        // 页面创建后立即执行一次
        immediate: true
      })

      // 监听reactive数据变化后, 获取普通对象
      watch(() => ({ ...info }), (newValue, oldValue) => {
        console.log(newValue, oldValue)
      }, {
        immediate: true,
        deep: true
      })

      return {
        msg,
        info
      }
    }
  }
</script>
