<template>
  <div class="car">
    <div class="nav">
      <!-- 头部 -->
      <van-nav-bar fixed title="购物车" left-text="返回" :right-text="edit ? '编辑' : '完成'" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    </div>
    <!-- 广告位置 -->
    <div class="pink"></div>
    <!-- 中间购物车列表数据 -->
    <div class="car-detail">
      <!-- 具体每项 -->
      <div class="car-item" v-for="(item, index) in carData" :key="item.carId">
        <!-- 复选框 -->
        <div class="left-choose">
          <van-checkbox v-model="bol[index]" @click="danSelect"></van-checkbox>
        </div>
        <!-- 中间图片 -->
        <div><img :src="item.product.smallImg" alt="" /></div>
        <!-- 右边盒子 -->
        <div class="right-box">
          <div class="name">{{ item.product.name }}</div>
          <!-- 价格和步进器 -->
          <div class="price-bu">
            <div class="price">￥{{ item.product.Price }}元</div>
            <van-stepper v-model="item.count" theme="round" button-size="22" disable-input />
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <!-- 提交订单 -->
      <van-submit-bar v-if="edit" :price="allPrice" button-text="提交订单" @submit="goin">
        <van-checkbox v-model="allChoose" @click="selectAll">全选</van-checkbox>
        <!-- <template #tip>
          你的收货地址不支持同城送,
          <span @click="onClickEditAddress">修改地址</span>
        </template> -->
      </van-submit-bar>
      <van-submit-bar v-else :price="allPrice" button-text="删除订单" @submit="delect">
        <van-checkbox v-model="allChoose" @click="selectAll">删除</van-checkbox>
        <!-- <template #tip>
          你的收货地址不支持同城送,
          <span @click="onClickEditAddress">修改地址</span>
        </template> -->
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      carData: [],
      allChoose: false, //全选
      // 装布尔值，用来判断是否勾选
      bol: [],
      // 判断编辑
      edit: true,
      //产品Id用作删除
      carId: [],
    };
  },
  computed: {
    //计算全部的价格
    allPrice() {
      //   默认价格为0
      let price = 0;
      for (let index = 0; index < this.carData.length; index++) {
        // 勾选后，商品价格*数量
        if (this.bol[index]) {
          price =
            price +
            this.carData[index].product.Price * this.carData[index].count;
        }
      }
      return price * 100;
    },
  },
  // 先验证能否可拿到数
  created() {
    this.getCar();
  },
  methods: {
    getCar() {
      this.axios({
        method: "get",
        url: "/findCar",
        params: {
          id: localStorage.getItem("token"),
        },
      }).then((res) => {
        console.log("购物车数据", res);
        this.carData = res.data.data;
        // 每次请求数据前都要清空bol的布尔值
        this.bol = [];
        // 遍历，有多少个产品多少个布尔值
        // 每次都清空全选的按钮状态
        this.allChoose = false;
        //如果没有查询到数据（数据为空）
        if (res.data.stutas == 1301) {
          this.carData = [];
          return;
        }
        // 遍历，有多少个产品多少个布尔值
        this.carData.map((v) => {
          console.log(v);
          this.bol.push(false);
        });

        // 加完验证一下
        console.log("this.carData", this.carData);
        console.log("this.bol", this.bol);
      });
    },
    // 处理全选
    selectAll() {
      // 清空布尔值
      (this.bol = []),
        this.carData.map((v) => {
          console.log(v);
          // this.allChoose 是全选的状态
          this.bol.push(this.allChoose);
        });
      console.log("bol", this.bol); //true
      this.handle();
    },
    // 处理单选
    danSelect() {
      for (let index = 0; index < this.carData.length; index++) {
        // 只要有一个没勾选，全选按钮就变成false
        if (!this.bol[index]) {
          this.allChoose = false;
          this.handle();
          return;
        }
        this.handle();
        // 否则变成ture
        this.allChoose = true;
      }
    },
    // 返回按钮
    onClickLeft() {
      this.$router.go(-1);
    },
    // 编辑按钮
    onClickRight() {
      this.edit = !this.edit;
    },
    // 处理勾选产品id主键
    handle() {
      // 清空
      this.carId = [];

      for (let index = 0; index < this.carData.length; index++) {
        if (this.bol[index]) {
          this.carId.push(this.carData[index].carId);
        }
      }
      console.log("this.carId", this.carId);
    },
    // 删除按钮
    delect() {
      // 如果没有勾选时，不删除
      if (this.carId.length == 0) {
        Toast("请勾选");
        return;
      }
      // 判断是否登录
      if (!localStorage.getItem("token")) {
        this.$router.push({ name: "Login" });
      }
      this.axios({
        method: "post",
        url: "/deleteCar",
        data: {
          id: localStorage.getItem("token"),
          carIdArr: this.carId, //传递要被删除的carId数组
        },
      })
        .then((res) => {
          console.log(res);
          this.getCar();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    // 提交订单
    goin() {
      // 如果没有勾选时，不删除
      if (this.carId.length == 0) {
        Toast("请勾选");
        return;
      }
      // 判断是否登录
      if (!localStorage.getItem("token")) {
        this.$router.push({ name: "Login" });
      }
      // 提交总价格和勾选的产品
      let data = [];
      // 处理勾选的产品，传递到支付页面
      this.carData.map((v, index) => {
        console.log(v);
        if (this.bol[index]) {
          //把数量加入产品里面去
          this.carData[index].product.count = this.carData[index].count;
          data.push(this.carData[index]);
        }
      });
      // 传递到支付页面 toFixed(2)保留两位小数
      this.$router.push({
        name: "Pay",
        query: {
          allPrice: this.allPrice.toFixed(2) / 100,
          product: JSON.stringify(data),
        },
      });
    },
  },
};
</script>

<style scoped>
.car {
  margin-bottom: 100px;
}
/* .car{
    background: white;
} */
.pink {
  margin-top: 46px;
  height: 50px;
  background: pink;
}
.car-detail {
  margin-bottom: 60px;
}
.car-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin: 10px;
  background: white;
  border-radius: 10px;
}
.left-choose {
  width: 20px;
  margin: 0 10px;
}
.car-item img {
  width: 100px;
  height: 97px;
}
.right-box {
  height: 80px;
  flex: 1;

  padding: 10px;
}
.right-box .name {
  width: 195px;
  height: 40px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.right-box .price-bu {
  display: flex;
  /* 垂直居中，前提主轴没变化 */
  align-items: center;
  justify-content: space-between;
  height: 40px;
}
.footer {
  margin-bottom: 20px;
}
</style>