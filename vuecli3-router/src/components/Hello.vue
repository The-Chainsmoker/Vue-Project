<template>
  <div id="hello">
    <!-- <input type="text" :value="goodName" @input="update" /> -->
    <slot :data="list">
      <div v-for="item in list">{{ item }}</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'hello',
  model: {
    prop: 'goodName',
    event: 'change',
  },
  props: {
    goodName: String,
  },
  data() {
    return {
      list: ['Js', 'Jquery', 'Html', 'Vue'],
    }
  },
  methods: {
    update(event) {
      // console.log(event.target.value)
      this.$emit('change', event.target.value)
    },
  },
}
</script>

<style scoped></style>
