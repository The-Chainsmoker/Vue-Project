<template>
  <!-- Vue3组件中的模板结构可以没有根标签 -->
  <div id="app">
    <!--
     <div class="parent">
      <h3>父组件</h3>

      <suspense>
        <template #default>
          <children />
        </template>
        <template #fallback>
          <h3>加载中...</h3>
        </template>
      </suspense>
    </div>
    <destroy />
   -->

    <suspense>
      <template #default>
        <parent></parent>
      </template>

      <template #fallback>
        <div>正在加载...</div>
      </template>
    </suspense>
  </div>
</template>

<script>
import Children from '@/components/Children'
import Destroy from '@/components/Destroy'
import Parent from '@/view/Parent'
// import { defineAsyncComponent } from 'vue'
// const Children = defineAsyncComponent(() => import('@/components/Children'))

export default {
  name: 'App',
  components: {
    Destroy,
    Children,
    Parent,
  },
  mounted() {},
  setup() {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.parent {
  padding: 10px;
  background-color: aqua;
}
</style>
