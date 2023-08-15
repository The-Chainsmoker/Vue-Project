<template>
  <div class="Order">
    <van-nav-bar title="我的订单" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="bg-red"></div>
    <!-- 大盒子 -->
    <div class="big-box">
      <!-- 三个选项 -->
      <div class="three-choose">
        <van-tabs v-model="active" @change='changeThreen'>
          <van-tab title="全部" name='2'></van-tab>
          <van-tab title="进行中" name='0'></van-tab>
          <van-tab title="已完成" name='1'></van-tab>
        </van-tabs>
      </div>
      <!-- 产品内容 -->
      <div class="pro-box" v-for="item in order" :key="item.orderId">
        <div class="num-box">
          <div class="no">No {{item.orderNo}}</div>
          <div class="status" v-if="item.stutas==0" @click="take(item.orderId)">待收货</div>
          <div class="status" v-else>
            <div>已完成</div>
            <div @click="deleteOrder(item.orderId)">
              <van-icon name="delete-o" size="20" />
            </div>
          </div>
        </div>
        <div class="product-box" v-for="k in item.product" :key="k.carId">
          <img :src="k.product.smallImg" alt>
          <div class="product-right">
            <div class="title">
              {{k.product.name}}
            </div>
            <div class="price-count">
              <div class="price">${{k.product.Price}}元</div>
              <div class="count">×{{k.count}}</div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="time">{{item.created_at}}</div>
          <div class="count-all">
            <div class="count">共计{{item.product.length}}件</div>
            <div class="all">合计￥{{item.allPrice}}元</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 2,
      num: 2,
      order: [], //订单信息
    };
  },
  created() {
    this.gotOrder();
  },
  methods: {
    gotOrder() {
      this.axios({
        method: "get",
        url: "/getOrder",
        params: {
          id: localStorage.getItem("token"),
          stutas: this.active,
        },
      })
        .then((res) => {
          console.log(res);
          //清空数据
          this.order = [];
          this.order = res.data.data.reverse();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //返回上一级页面
    onClickLeft() {
      this.$router.push({ name: "My" });
    },
    //修改订单状态
    take(orderId) {
      this.axios({
        method: "get",
        url: "take",
        params: {
          id: localStorage.getItem("token"),
          orderId,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.stutas == 1311) {
            this.gotOrder();
          }
        })
        .catch((err) => {});
    },
    // 删除订单
    deleteOrder(orderId) {
      console.log(orderId);
      this.axios({
        method: "post",
        url: "delectOrder",
        data: {
          id: localStorage.getItem("token"),
          orderId,
        },
      })
        .then((res) => {
          if (res.data.stutas == 502) {
            this.gotOrder();
          }
        })
        .catch((err) => {});
    },
    //三个导航切换事件
    changeThreen() {
      this.gotOrder();
    },
  },
};
</script>
<style lang="less" scoped>
@import "Order.less";
</style>