<template>
  <div class="Address">
    <div class="nav">
      <!-- 头部 -->
      <van-nav-bar title="地址列表" left-text="返回" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="big-box">
      <div class="person-msg" v-for="item in addressData" :key="item.addId">
        <!-- 第一行 -->
        <div class="username-box">
          <div class="user">{{item.name}}</div>
          <div class="tel">{{item.phone}}</div>
          <van-icon name="delete-o" @click="deleteAddress(item.addId)" />
        </div>
        <!-- 第二行 -->
        <div class="detail-address">{{item.detialArea}}</div>
      </div>
    </div>
  </div>
</template>s
<script>
export default {
  name: "Address",
  data() {
    return {
      addressData: [],
    };
  },
  created() {
    this.getAddress();
  },
  methods: {
    getAddress() {
      this.axios({
        method: "get",
        url: "/findAddress",
        params: {
          userId: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          console.log(res);
          this.addressData = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteAddress(addId) {
      console.log(addId);
      this.axios({
        method: "post",
        url: "/deleteAddress",
        data: {
          userId: localStorage.getItem("token"),
          addId: addId,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.stutas == 9901) {
            this.getAddress();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //返回页面
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang='less' scoped>
@import "Address.less";
</style>