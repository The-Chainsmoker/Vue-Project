<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view />
  </div>
</template>

<script>
import MainTabBar from '@/components/MainTabBar.vue'
export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    MainTabBar,
  },
  created() {
    // console.log(this.smokers)
  },
}
</script>
<style >
/* scoped的设计思想就是让当前组件的样式不会修改到其它地方的样式 */
/* App.vue核心组件不要scoped */
@import './assets/css/base.css';
@import './assets/css/iconfont.css';
.blue {
  color: #1296db;
}
</style>
