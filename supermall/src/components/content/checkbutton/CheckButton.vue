<template>
  <div class='check-button' :class="{check:isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  components: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>

<style scoped>
.check-button {
  border-radius: 50%;
  border: 1px solid #aaa;
}
.check {
  background-color: var(--color-tint);
  border: 1px solid var(--color-tint);
}
</style>