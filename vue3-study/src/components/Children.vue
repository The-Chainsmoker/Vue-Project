<template>
  <div id='Children'>
    <div class="children">
      <h3>子组件</h3>
      <p>{{sum}}</p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'Children',
  components: {},
  setup() {
    let sum = ref(0)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ sum })
      }, 2000)
    })
  },
}
</script>

<style scoped>
.children {
  background-color: bisque;
  padding: 10px;
}
</style>