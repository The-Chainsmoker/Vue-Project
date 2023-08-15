<template>
  <div class="Pay">
    <div class="nav">
      <!-- 头部 -->
      <van-nav-bar title="订单计算" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="big-box">
      <!-- 选择地址 -->
      <div class="choose">
        <div class="choose-address" @click="showPopup">
          <div class="choose-title">选择地址</div>
          <!-- 图标 -->
          <div class="chose-icon">
            <van-icon name="arrow" />
          </div>
        </div>
        <!-- 个人信息 -->
        <div class="person-msg">
          <!-- 第一行 -->
          <div class="username-box">
            <div class="user">{{address.name}}</div>
            <div class="tel">{{address.phone}}</div>
            <van-tag round type="danger" v-if="address.isDefault">默认</van-tag>
          </div>
          <!-- 第二行 -->
          <div class="detail-address">{{address.detailAddress}}</div>
        </div>
      </div>
      <!-- 产品信息 -->
      <div class="product-msg">
        <!-- 订单信息 -->
        <div class="order-msg">
          订单信息
        </div>
        <!-- 产品 -->
        <div class="product-box" v-for="item in product" :key="item.pid">
          <img :src="item.product.smallImg" alt>
          <div class="product-right">
            <div class="title">
              {{item.product.name}}
            </div>
            <div class="price-count">
              <div class="price">${{item.product.Price}}元</div>
              <div class="count">×{{item.count}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="time">{{time}}</div>
        <div class="count-all">
          <div class="count">共计{{product.length}}件</div>
          <div class="all">合计￥{{allPrice}}元</div>
        </div>
      </div>
    </div>
    <div class="btn" @click="goInorder">
      <van-button type="danger" round size="large">提交订单</van-button>
    </div>
    <!-- 弹出地址 -->
    <van-popup v-model="show" close-icon="close" position="bottom" :style="{ height: '50%' }">
      <div class="address-choose-box">
        <div class="address-title">选择地址</div>
        <!-- 引入新增地址 -->
        <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" @select="onSelect" />
      </div>
    </van-popup>
  </div>
</template>
<script>
import { Toast } from "vant";
const util = require("../../js/util");
let times = null;
export default {
  data() {
    return {
      //产品订单
      product: [],
      //总价格
      allPrice: 0,
      time: util.formatTime(new Date()),
      show: false,
      chosenAddressId: "",
      list: [],
      //用来摆放支付上面的地址信息
      address: {
        name: "",
        phone: "",
        detailAddress: "",
        isDefault: false,
      },
    };
  },
  created() {
    this.product = JSON.parse(this.$route.query.product);
    this.allPrice = this.$route.query.allPrice;
    console.log(this.product);
    //定时器,每隔一段时间执行一次
    times = setInterval(() => {
      this.time = util.formatTime(new Date());
    }, 1000);
    this.getAddress();
  },

  methods: {
    //返回购物车页面
    onClickLeft() {
      this.$router.go(-1);
    },
    //弹出层案例
    showPopup() {
      this.show = true;
    },
    //新增地址
    onAdd() {
      this.$router.push({
        name: "NewAddress",
      });
    },
    //得到地址
    getAddress() {
      this.axios({
        methods: "get",
        url: "/findAddress",
        params: {
          userId: localStorage.getItem("token"),
        },
      }).then((res) => {
        console.log(res);
        //得到地址的数据的列表

        res.data.data.map((v) => {
          let o = {};
          o.id = v.addId;
          o.name = v.name;
          o.address = v.area + v.detialArea;
          o.tel = v.area + v.phone;
          o.isDefault = v.defaultAddress;
          this.list.push(o);
          //判断是否有默认地址,把地址赋值在支付页面上
          if (v.defaultAddress) {
            //选中默认地址
            this.chosenAddressId = v.addId;

            this.address.name = v.name;
            this.address.phone = v.phone;
            this.address.detailAddress = v.area + v.detialArea;
            this.address.isDefault = v.defaultAddress;
          }
        });
        //如果存在没有默认地址,默认第一项为默认地址
        if (!this.address.isDefault) {
          //地址数据列表存在才能赋值
          if (this.list[0]) {
            this.address.name = this.list[0].name;
            this.address.phone = this.list[0].tel;
            this.address.detailAddress = this.list[0].address;

            this.address.isDefault = true; //默认支付页面信息

            this.list[0].isDefault = true; //默认选择地址

            //勾选对应的选项
            this.chosenAddressId = this.list[0].id;
          }
        }
        console.log(this.list);
      });
    },
    onEdit() {},

    //选中把地址赋值在支付页面上
    onSelect(item) {
      console.log(item);
      this.address.name = item.name;
      this.address.phone = item.tel;
      this.address.detailAddress = item.address;
      this.address.isDefault = item.isDefault;
    },
    //提交订单
    goInorder() {
      //判断支付页面的地址是否存在
      if (!this.address) {
        Toast("请勾选地址");
        return;
      }
      this.axios({
        method: "post",
        url: "/order",
        data: {
          id: localStorage.getItem("token"),
          product: this.product,
          allPrice: this.allPrice,
          address: this.address.detailAddress,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.stutas == 1401) {
            Toast("添加成功");
            this.$router.push({ name: "Order" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
@import "Pay.less";
</style>