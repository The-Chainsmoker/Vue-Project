<template>
  <div class="Test">
    <div><input type="text" v-model="user" /></div>
    <div>{{ user }}</div>
    <slot ok="hello"></slot>
    {{ read }}
  </div>
</template>
<script>
import {
  reactive,
  customRef,
  readonly,
  ref,
  isRef,
  isReactive,
  isReadonly,
  isProxy,
  shallowReadonly,
} from 'vue'
export default {
  name: 'Test',
  setup() {
    let person = reactive({
      name: '小明',
      job: {
        age: 13,
      },
    })

    let good = ref({
      age: 123,
      option: {
        name: '哈哈',
      },
    })

    let read = readonly('helloworld')

    let goodOnly = readonly(person)

    console.log(isRef(good))
    console.log(isReactive(person))
    console.log(isReadonly(goodOnly))
    console.log(isProxy(person))
    console.log(isProxy(goodOnly))

    let user = myRef('我的myRef', 1000)

    //自定义防抖的响应数据
    //定义一个工厂函数
    function myRef(value, delay) {
      //设置一个多次使用的定时器
      let time = null
      return customRef((track, trigger) => {
        return {
          //get、set和computed函数相识
          get() {
            console.log('get')
            track() //通知Vue追踪数据的变化
            return value
          },
          set(newValue) {
            clearTimeout(time)
            console.log('set', newValue)
            time = setTimeout(() => {
              value = newValue
              trigger() //通知Vue去重新解析模板（还需track追踪）
            }, delay)
          },
        }
      })
    }

    return {
      person,
      user,
      read,
    }
  },
}
</script>
