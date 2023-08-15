<template>
  <div class="Search">
    <!-- 头部搜素 -->
    <div class="header">
      <van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <!-- 没有数据显示 -->
    <div class="noData" v-if="searchData.length==0">
      <img src="https://img.yzcdn.cn/vant/empty-image-default.png" alt="">
      <p>暂无数据请搜索</p>
    </div>
    <!-- 有数据显示 -->
    <!-- 产品 -->
    <div class="product-box" v-for="item in searchData" :key="item.pid" @click="GetDetail(item.pid)">
      <img :src="item.smallImg" alt>
      <div class="product-right">
        <div class="title">
          {{item.name}}
        </div>
        <div class="price-count">
          <div class="price">${{item.Price}}元</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  name: "Search",
  data() {
    return {
      value: "汉堡",
      searchData: [],
    };
  },
  methods: {
    onSearch() {
      this.axios({
        method: "get",
        url: "/search",
        params: {
          key: this.value,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.status == 1901) {
            Toast("查询为空");
            this.searchData = [];
            return;
          }
          if (res.data.stutas == 1902) {
            Toast("查询成功");
            this.searchData = res.data.data;
          }
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

<style lang='less' scoped>
@import "Search.less";
</style>