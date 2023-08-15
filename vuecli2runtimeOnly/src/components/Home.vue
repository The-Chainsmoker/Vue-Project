<template>
  <div>
    <h3>我是首页</h3>
    <i class="el-icon-platform-eleme"></i>
    <router-link to="/home/user" tag="button">子用户</router-link>
    <router-link to="/home/news" tag="button">子新闻</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      path: "/home/user",
      message: "hello"
    };
  },
  async created() {
    // this.$store.commit("getAge", "age12岁");
    // console.log(this.$store.getters.getName);
    let result = await this.$store.dispatch("yong", {
      name: "thechainsmokers"
    });

    console.log(result);
  },
  activated() {
    console.log("activated");
    this.$router.replace(this.path);
  },
  deactivated() {
    //获取keep-alive的内组件之间的跳转到别的路径才调用
    console.log("deactivated");
  },
  beforeRouteLeave(to, from, next) {
    //离开自身组件的子组件到别的组件才调用
    // beforeRouteUpdate; 跳转到别的子组件前才调用
    //如果父路由显示子路的内容,此时的this.$route.path就是子路经
    this.path = this.$route.path;
    console.log("beforeRouteLeave");
    // console.log(this.$route.path)
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
    console.log(this.$route.path);
  }
};
</script>

<style scoped>
.el-icon-platform-eleme {
  font-size: 20px;
  color: red;
}
</style>
