<template>
  <h2>Home组件{{message}}</h2>
</template>

<script>
import messageMixin from './message-mixin';

export default {
  mixins: [messageMixin],
  created() {
      console.log("home-created")
    }
};
</script>
