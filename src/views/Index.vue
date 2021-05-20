<template>
  <div id="Index">
    <button>接口测试</button>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {}
  },
  created() {},
  methods: {
    getInfo() {
      let { data } = this.$http.get()
      console.log(data)
    },
  },
}
</script>

<style lang="scss">
#Index {
  font-size: 16rem;
}
</style>