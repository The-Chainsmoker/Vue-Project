<template>
  <div id="app">
    <button @click="rede">-</button>
    {{$store.state.count}}
    <button @click="add">+</button>
    <button @click="$store.commit('mulAdd',10)">+10</button>
    <button @click="$store.commit('mulStu',{ name: '小狗', age: 25, work: '工人' })">添加学生</button>
    <button @click="show">改变属性</button>
    <button @click="change">action异步操作</button>
    <button @click="moudule">moudule调用</button>
    <hello-vuex />
    <router-view />
    <!-- store的getters -->
    {{$store.getters.getStuAge(20)}}
    {{$store.getters.getStuLength}}
    <div>=========Amodule</div>
    {{$store.state.moduleA.name}}
    {{$store.getters.aSum}}
    {{$store.getters.aObject}}
    {{$store.getters.aRoot}}
    {{$store.getters.aRootGetter}}
  </div>
</template>

<script>
import HelloVuex from '@/components/HelloVuex'
import { SHOW } from '@/store/mutations'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    HelloVuex,
  },
  methods: {
    rede() {
      // this.$store.state.count
      this.$store.commit('reduce') //可以直接放到@click上
    },
    add() {
      this.$store.commit('add')
    },
    show() {
      this.$store.commit(SHOW)
    },
    change() {
      // this.$store.commit('change')
      this.$store.dispatch('asyChange', { message: '请求成功哈哈' }).then((res) => {
        console.log(res)
      })
    },
    moudule() {
      this.$store.commit('aChange')
      this.$store.dispatch('asyAmodule')
    },
  },
}
</script>

<style>
</style>
