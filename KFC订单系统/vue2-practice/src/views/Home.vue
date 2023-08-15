<template>
  <div class="home">
    <div class="search">
      <h2>下午好</h2>
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </div>
    <div class="content">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(image,index) in banner" :key="index">
          <img v-lazy="image.bannerImg" />
        </van-swipe-item>
      </van-swipe>
      <!-- 热卖推荐 -->
      <div class="hot-buy">
        <div class="hot-text">热卖推荐</div>
      </div>
    </div>
    <!-- 商品内容 -->
    <div class="shop-content">
      <!-- 小的盒子 -->
      <div class="pro-item" v-for="(item,index) in product" :key="index" @click="GetDetail(item.pid)">
        <!-- 图片 -->
        <div class="icon">
          <img :src="item.smallImg" alt="">
        </div>
        <!-- 标题 -->
        <div class="pro-title">{{item.name}}</div>
        <!-- 价格 -->
        <div class="price">${{item.Price}}元</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      banner: [],
      product: [],
      value: "",
    };
  },
  created() {
    // 调用
    this.getBanner();
    this.getProducts();
  },
  methods: {
    // 请求轮播图的数据  笑死 苹果系统  axios
    getBanner() {
      this.axios({
        // 请求方式
        method: "get",
        // 请求地址
        url: "/bannar",
      })
        .then((res) => {
          //输入请求回来的数据
          console.log("轮播图数据", res);

          // 重新赋值一下
          this.banner = res.data.data.result;
        })
        .catch((err) => {});
    },
    //获取商品类型
    getProducts() {
      this.axios({
        // 请求方式
        method: "get",
        // 请求地址
        url: "/product",
      })
        .then((res) => {
          //输入请求回来的数据
          this.product = res.data.data;
          console.log("商品类型", this.product);
        })
        .catch((err) => {});
    },
    //带参数跳转到商品详情页面
    GetDetail(event) {
      this.$router.push({
        path: "/detail",
        query: { pid: event },
      });
    },
  },
};
</script>

<style lang="less" scoped>
@import "Home.less";
</style>