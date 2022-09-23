<template>
  <h2 ref="titleRef">我是标题</h2>
  <show-info ref="showInfoRef"></show-info>
  <button @click="getElements">获取元素</button>
</template>

<script>
import { ref, onMounted } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components: {
    ShowInfo,
  },
  setup() {
    // 获取元素实例
    const titleRef = ref();
    // 获取组件实例
    const showInfoRef = ref();

    onMounted(() => {
      console.log(titleRef.value);
      console.log(showInfoRef.value);
      // 调用子组件方法
      showInfoRef.value.showInfoFoo();
    });

    function getElements() {
      console.log(titleRef.value);
    }

    return {
      titleRef,
      showInfoRef,
      getElements,
    };
  },
};
</script>