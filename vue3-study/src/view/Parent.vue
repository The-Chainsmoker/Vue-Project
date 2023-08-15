<template>
  <div class="Parent"></div>
  <button @click="change">改变</button>
  <input type="text" v-model="user.name" />

  <teleport to="body">
    <div class="mask">提示组件</div>
  </teleport>
  <son> </son>
</template>

<script>
import {
  ref,
  reactive,
  toRef,
  toRefs,
  shallowReactive,
  shallowRef,
  readonly,
  toRaw,
  markRaw,
  customRef,
  watch,
  watchEffect,
  onBeforeMount,
  onMounted,
  getCurrentInstance,
} from 'vue'
import Son from '@/view/Son'
import { usePoint } from '@/hook/usePoint'
export default {
  components: {
    Son,
  },
  setup(props, context) {
    const { proxy } = getCurrentInstance()

    onBeforeMount(() => {
      console.log('onBeforeMount')
      console.log('proxy', proxy)
      proxy.$http() //使用挂载在vue实例上的例子
    })

    let user = ref({
      name: '小明',
      age: 19,
    })

    let userPoint = usePoint()

    function change() {}

    return new Promise((reslove, reject) => {
      setTimeout(() => {
        reslove({
          user,
          change,
          userPoint,
        })
      }, 1000)
    })
  },
}
</script>

<style lang="scss" scoped></style>
