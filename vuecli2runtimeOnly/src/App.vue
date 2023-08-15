<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" replace>主页</router-link> -->
    <!-- <router-link :to="'/about/'+name" replace>知道</router-link> -->
    <!-- <router-link :to="{name:'About',params:{sex:'男',age:13 }}" replace>知道</router-link> -->

    <button @click="Home">主页</button>
    <button @click="About">知道</button>
    <!-- 只会对一级的路由影响,二级以上的不影响 -->
    <keep-alive include="Home,About">
      <!--keep-alive内组件被缓存,--内组件的子组件不会被缓存-->
      <!-- 当组件在keep-alive内组件被切换时,keep-alive对应的内组件的activated、deactivated这两个生命周期钩子函数会被执行 -->
      <router-view></router-view>
    </keep-alive>

    <!-- <test hello='你好'>
      <template v-slot="slot">
        <div>
          {{slot}}
        </div>
      </template>
    </test> -->
  </div>
</template>

<script>
import Test from './components/Test.vue'
export default {
  name: 'App',
  components: {
    Test,
  },
  data() {
    return {
      name: '张四',
      path: '/home/user',
    }
  },
  methods: {
    Home() {
      this.$router.replace('/home').catch((err) => {
        //这里的$router等于vue-router的实例router
        console.log('输出报错', err)
      }) //避免重复点击报错
    },
    About() {
      // this.$router.replace({
      //   name: "About",
      //   params: { message: "传过来的值哈哈" },
      // });
      this.$router.replace('/about/' + this.name)
    },
  },
}
</script>

<style scoped>
/* .router-link-exact-active {
  color: red;
} */
.name {
  color: red;
}
</style>
