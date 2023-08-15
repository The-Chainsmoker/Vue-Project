<template>
  <div class="detail">
    <!-- @click-right="onClickRight" -->
    <van-nav-bar fixed title="商品详情" left-text="返回" right-text="" left-arrow @click-left="onClickLeft" />
    <div class="detail-box">
      <div class="icon">
        <div class="left">
          <van-icon name="arrow-down" />
        </div>
        <div class="right">
          <van-icon name="more-o" />
        </div>
      </div>
      <div class="shopPic">
        <img :src="product.largeImg" alt="" />
        <div class="text">图片仅供参考</div>
      </div>
      <div class="title">
        <div class="name">{{product.name}}</div>
        <div class="good">
          <van-icon size="20px" name="good-job-o
" />
        </div>
      </div>
      <div class="price">￥{{product.Price}}</div>
    </div>
    <div class="amount">
      <div class="text">选择数量</div>
      <van-stepper class="stepper" v-model="value" theme="round" button-size="22" disable-input />
    </div>
    <div class="introduce">
      <div class="card">
        <van-tabs>
          <van-tab title="详情">
            <div class="card-box">
              <div class="text">掌柜描述 <span v-for="item in product.desc" :key="item">{{item}}</span></div>
              <div class="text">价格说明
                <van-icon name="question-o" />
              </div>
            </div>
          </van-tab>
          <van-tab title="评价">
            <div class="card-box">
              <div class="text">掌柜描述 <span v-for="item in product.desc" :key="item">{{item}}</span></div>
              <div class="text">价格说明
                <van-icon name="question-o" />
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <div class="zhuyi">
      注意事项：
      <div>1.贵州地区、、、、、</div>
    </div>
    <div>
      <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
        <van-goods-action-icon icon="cart-o" text="购物车" @click="toCar" />
        <van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
        <van-goods-action-button type="warning" text="加入购物车" @click="addCar" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      product: [],
      value: 0, //数量
    };
  },
  created() {
    // 打印传过来的数据
    console.log(this.$route.query.pid);
    //请求详情页面数据
    this.getDetail(this.$route.query.pid);
  },
  methods: {
    onClickLeft() {
      // 跳转到上一页
      this.$router.go(-1);
    },
    getDetail(pid) {
      this.axios({
        method: "get",
        url: "/detail",
        params: {
          pid: pid,
        },
      })
        .then((res) => {
          console.log(res);
          this.product = res.data.data[0];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //加入购物车的方法
    addCar() {
      // 加入购物车之前判断是否登录
      if (!localStorage.getItem("token")) {
        // 没有就跳转都登录
        this.$router.push({ name: "login" });
        return;
      }
      this.axios({
        method: "post",
        url: "/addCar",
        data: {
          id: localStorage.getItem("token"), //存在本地
          count: this.value,
          product: this.product,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.stutas == 1201) {
            Toast("加入购物车成功");
          }
          if (res.data.stutas == 1205) {
            Toast("商品已存在购物车");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //跳转到购物车列表
    toCar() {
      this.$router.push({ name: "Car" });
    },
  },
};
</script>
<style scoped>
.detail {
  margin-bottom: 100px;
  /* height: 100vh; */
}
.van-nav-bar--fixed {
  z-index: 9999;
}
.icon {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 2px;
  z-index: 999;
}
.icon .left {
  width: 35px;
  height: 35px;
  background: gray;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  color: white;
  font-size: 16px;
  margin-left: 10px;
}
.icon .right {
  width: 35px;
  height: 35px;
  background: gray;
  border-radius: 50%;
  text-align: center;
  line-height: 35px;
  color: white;
  font-size: 20px;
  margin-right: 10px;
}
.detail-box {
  margin-top: 47px;
  position: relative;
  margin-bottom: 5px;
}
.detail-box .shopPic {
  position: relative;
  width: 100%;
  /* height: 300px; */
}
.shopPic img {
  width: 100%;
  /* height: 300px; */
  vertical-align: middle;
}
.detail-box .text {
  position: absolute;
  right: 5px;
  bottom: 2px;
  font-size: 13px;
  font-weight: 550;
}
.title {
  display: flex;
  justify-content: space-between;
  background: white;
}
.title .name {
  line-height: 40px;
  font-size: 18px;
  margin-left: 15px;
  font-weight: 580;
}
.title .good {
  height: 40px;
  line-height: 40px;
  margin-right: 20px;
}
.detail-box .price {
  height: 30px;
  line-height: 30px;
  color: #ff4500;
  font-size: 20px;
  font-weight: 580;
  background: white;
  text-indent: 15px;
  padding-bottom: 10px;
}
.amount {
  position: relative;
  height: 50px;
  display: flex;
  flex-direction: row;
  background: white;
  line-height: 50px;
  margin-bottom: 5px;
}
.amount .text {
  font-size: 14px;
  text-indent: 10px;
}
.amount .stepper {
  position: absolute;
  right: 12px;
}
.introduce {
  background: white;
}
.card {
  height: 120px;
  display: flex;
  flex-direction: row;
  line-height: 40px;
  margin-bottom: 5px;
}

.card-box {
  color: gray;
  font-size: 14px;
  padding-left: 10px;
  padding-top: 10px;
}
.card-box .text {
  width: 100%;
  height: 30px;
  line-height: 30px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-box .text span {
  color: rgba(0, 0, 0, 0.678);
  white-space: normal;
}
span::after {
  content: "+";
}
span:last-child::after {
  content: "";
}
.card-box .text .icon {
  margin-left: 5px;
}
.zhuyi {
  background: white;
  font-size: 14px;
  height: 100px;
}
.zhuyi div {
  margin: 10px;

  font-size: 12px;
  color: gray;
}
</style>