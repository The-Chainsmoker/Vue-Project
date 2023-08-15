<template>
  <div class="hello">
    {{$store.state.count}}
    <!-- <h1>{{$store.state.name}}</h1>
    <p ref="refname">哈哈</p> -->
  </div>
</template>

<script>
export default {
  name: 'HelloVuex',
  data() {
    return {
      show2: true,
    }
  },
  created() {
    //调用Mutations方法去修改state成员的值
    // this.$store.commit('content', { login: 'smokers', password: '男' }) //提交数据到仓库中
    // console.dir(this.$store.getters.nameInfo)
  },
  beforeMount() {},
  mounted() {
    // console.dir(this.$el)
    //$refs找dom节点的属性ref="domName"
    //$el找dom根节点下的所有节点
    // console.dir(this.$refs)
  },
}
</script>
<style>
</style>
