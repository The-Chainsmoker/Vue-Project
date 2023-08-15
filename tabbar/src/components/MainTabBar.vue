<template>
  <div id="MainTaBbar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <!-- <span class="iconfont icon-shouyeno" slot="item-icon"></span> -->
        <!-- <span class="iconfont icon-shouyeno blue" slot="item-icon-active"></span>
         -->
        <img src="~assets/img/tabbar/home.svg" slot="item-icon">
        <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active">
        <div slot="item-text" class="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/category' activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text" class="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart' activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text" class="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile' activeColor="#ff5777">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text" class="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/tabbar/TabBar.vue'
import TabBarItem from '@/components/tabbar/TabBarItem.vue'
export default {
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style scoped>
@import '../assets/css/iconfont.css';
.blue {
  color: #1296db;
}
</style>