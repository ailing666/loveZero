<template>
  <div>
    <a-button>默认ffff按钮</a-button>
    <a-button type="primary">primary</a-button>
    <a-button type="success">success</a-button>
    <a-button type="wraning">wraning</a-button>
    <a-button type="danger">danger</a-button>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    "a-button": () => import("@/components/button"),
  },
};
</script>
