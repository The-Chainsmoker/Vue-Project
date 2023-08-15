<template>
  <div class="NewAddress">
    <van-nav-bar title="新增地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-address-edit :area-list="areaList" show-postal show-set-default show-search-result :search-result="searchResult" :area-columns-placeholder="['请选省', '请选市', '请选区']" @save="onSave" @change-detail="onChangeDetail" />
  </div>
</template>
<script>
import areaList from "../../js/area";
import { Toast } from "vant";
export default {
  data() {
    return {
      areaList: areaList,
      searchResult: [],
    };
  },
  created() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSave(content) {
      Toast("save");
      console.log("表单内容", content);

      if (!localStorage.getItem("token")) {
        this.$router.push({ name: "Login" });
      }
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      this.axios({
        method: "post",
        url: "/address",
        data: {
          userId: localStorage.getItem("token"),
          name: content.name,
          phone: content.tel,
          area: content.province + content.city + content.county,
          detialArea: content.addressDetail,
          mail: content.postalCode,
          defaultAddress: content.isDefault,
        },
      })
        .then((res) => {
          console.log(res);
          Toast.clear();

          if (res.data.stutas == 1999) {
            this.$router.go(-1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
};
</script>

<style land="less" scoped>
@import "NewAddress.less";
</style>