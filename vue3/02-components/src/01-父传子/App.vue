<template>
  <Son abc="666" name="loveZero" :age="18" />
</template>

<script>
import Son from './components/Son.vue';

export default {
  name: 'App',
  components: { Son },
};
</script>
