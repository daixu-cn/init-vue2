<template>
  <div id="index">
    <h1>这里是主页</h1>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
#index {
  h1 {
    font-size: 24rem;
    color: $main-color;
    @include overflow-ellipsis;
  }
}
</style>