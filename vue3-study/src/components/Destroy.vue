<template>
  <div id="Destroy">
    <test v-if="show">
      <template v-slot="ok">
        <div>{{ ok }}</div>
      </template>
    </test>
    <br />
    <div>
      <button @click="show = !show">销毁组件</button>
    </div>
  </div>
</template>

<script>
import Test from '@/components/Test'
import { provide, reactive, toRefs, ref } from 'vue'
export default {
  components: { Test },
  name: 'Destroy',
  setup() {
    let show = ref(true)
    return {
      show,
    }
  },
}
</script>

<style scoped></style>
