<template>
  <!-- 全部一级路由的内容显示在这里 -->
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default defineComponent({
  components: {
    HelloWorld,
  },
  created() { },
  setup() {
    return
  },
})
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}

//填充当前页面
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
