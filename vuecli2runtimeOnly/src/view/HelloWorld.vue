<template>
  <div id='HelloWorld'>
    <slot>
      <div>
        我是默认的
      </div>
    </slot>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      list: ['A', 'B', 'C'],
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped>
</style>