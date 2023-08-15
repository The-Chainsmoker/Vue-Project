<template>
  <div id='Text'>
    <!-- <div>hello myname is chen</div> -->
    <slot :attain='list'>
    </slot>
    <div>{{message.name.good.ok}}</div>
    <button @click="message.name.good.ok++">点击</button>
  </div>
</template>

<script>
export default {
  name: 'Text',
  props: ['hello'],
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8],
      name: 123,
      message: {
        hello: '123',
        ok: 'look',
        name: {
          good: {
            ok: 0,
          },
        },
      },
    }
  },
  watch: {
    'message.name.good.ok': {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(newValue, oldValue)
      },
    },
  },
  components: {},
  created() {},
  mounted() {
    console.log(this)
  },
  methods: {},
}
</script>

<style scoped>
</style>