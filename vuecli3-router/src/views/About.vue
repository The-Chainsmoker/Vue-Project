<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ $route.params.userId }}
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$router.options.routes)
  },
  activated() {
    console.log('about-activated')
  },
  deactivated() {
    console.log('about-deactivated')
  },
}
</script>

<style></style>
