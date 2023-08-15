<template>
  <div class="Son">
    <button>传值</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    obj: {
      type: Object,
    },
  },
  setup(props, context) {
    function change() {}
    return { change }
  },
}
</script>

<style lang="scss" scoped></style>
