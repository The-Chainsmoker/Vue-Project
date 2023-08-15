<template>
  <div>
    <h3>知道</h3>
    {{mess}}
    {{$route.params.useId}}
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      mess: this.$route.params.age,
    }
  },
  created() {
    console.log('created')
  },
  destroyed() {
    // console.log('destroyed')
  },
}
</script>

<style scoped>
</style>