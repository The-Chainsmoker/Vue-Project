<template>
  <div class="My">
    <div class="head">
      <img src="../assets/beautiful.png" alt="">
    </div>

    <div class="big-box">
      <div class="figure">
        <div class="user iconfont icon-morentouxiang"></div>
        <div class="description">
          <div class="nickname">Chain-smokers</div>
          <div class="message">这家伙很懒,什么也没留下!</div>
        </div>
      </div>

      <div class="item-box" @click="goOrder">
        <div class="title">我的订单</div>
      </div>
      <div class="item-box" @click="goAddress">
        <div class="title">我的地址</div>
      </div>
      <div class="item-box">
        <div class="title" @click="tuchu">退出登录</div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goOrder() {
      this.$router.push({ name: "Order" });
    },
    goAddress() {
      this.$router.push({ name: "Address" });
    },
    tuchu() {
      localStorage.removeItem("token"), this.$router.push({ name: "login" });
    },
  },
};
</script>

<style lang="less" scoped>
// coped属性（可选属性）：会自动添加一个唯一的属性
// (比如 data-v-21e5b78) 为组件内 CSS 指定作用域，即css样式只在当前页面加载
@import "My.less";
@import "https://at.alicdn.com/t/font_2936843_yvrwjhs21eg.css?spm=a313x.7781069.1998910419.39&file=font_2936843_yvrwjhs21eg.css";
</style>