<template>
  <div class="Main">
    <router-view />
    <van-tabbar v-model="active" active-color='#ee0a24' inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/Home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/Search">搜索</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/Car">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/My">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style land="less" scoped>
@import "Main.less";
</style>