<template>
  <div id="app">
    <!-- {{$store.state.smoker}} -->
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
}
</script>

<style>
</style>
