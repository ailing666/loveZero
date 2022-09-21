<template>
  <h2>{{ message }}</h2>
  <home></home>
</template>

<script>
import Home from './Home.vue';
import messageMixin from './message-mixin';
export default {
  mixins: [messageMixin],
  components: {
    Home,
  },
};
</script>
