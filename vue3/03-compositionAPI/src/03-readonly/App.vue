<template>
  <h2>App: {{ info }}</h2>
  <show-info :roInfo="roInfo" @changeRoInfoName="changeRoInfoName"></show-info>
</template>

<script>
import { reactive, readonly } from 'vue';
import ShowInfo from './ShowInfo.vue';

export default {
  components: {
    ShowInfo,
  },
  setup() {
    const info = reactive({
      name: 'loveZero',
      age: 18,
      height: 1.88,
    });

    // 使用readOnly包裹info
    const roInfo = readonly(info);
    function changeRoInfoName(payload) {
      info.name = payload;
    }

    return {
      info,
      roInfo,
      changeRoInfoName,
    };
  },
};
</script>
