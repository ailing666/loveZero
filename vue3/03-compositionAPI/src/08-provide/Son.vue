<template>
  <div>ShowInfo: {{ name }}-{{ age }}</div>
</template>

<script>
import { inject } from 'vue';

export default {
  setup() {
    const name = inject('name');
    const age = inject('age');

    return {
      name,
      age,
      height,
    };
  },
};
</script>
