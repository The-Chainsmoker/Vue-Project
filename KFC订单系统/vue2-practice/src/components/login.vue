<template>
  <div class="login">
    <!-- 首部分 -->
    <div class="head">
      <img src="../assets/coffee.png" alt="" />
      <span @click="goHome">先逛逛</span>
    </div>
    <!-- 中间部分 -->
    <div class="middle">
      <img src="../assets/kft.png" alt="" />
    </div>

    <!-- 信息填写部分 -->
    <div class="content">
      <van-form>
        <van-field v-model="register.phone" clearable name="手机号码" label="手机号码" placeholder="手机号码" />
        <van-field v-model="register.password" v-on:click-right-icon="changeEye" :right-icon="registerEye ? 'browsing-history-o' : 'closed-eye'" :type="registerEye ? 'text' : 'password'" name="密码" label="密码" placeholder="密码" />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit" color="#fc3b3e" @click="loginW">立即登录</van-button>
        </div>
      </van-form>
    </div>
    <!-- 注册部分 -->
    <div class="footer">
      <van-cell is-link @click="showPopup">
        <div style="margin: 16px" class="register">
          <van-button round block type="info" color="#fff">立即注册
          </van-button>
        </div>
      </van-cell>

      <van-popup v-model="show" position="bottom" :style="{ height: '50%' }" closeable>
        <div class="sign">注册</div>
        <van-form>
          <van-field v-model="register.phone" clearable name="手机号码" label="手机号码" placeholder="手机号码" />
          <!-- 加冒号绑定动态属性,自定义改变密码显示图片 -->
          <van-field v-model="register.password" v-on:click-right-icon="changeEye" :right-icon="registerEye ? 'browsing-history-o' : 'closed-eye'" :type="registerEye ? 'text' : 'password'" name="密码" label="密码" placeholder="密码" />
          <van-field v-model="register.nickname" clearable type="text" name="昵称" label="昵称" placeholder="昵称" />
          <div style="margin: 16px">
            <van-button round block type="info" native-type="submit" color="#fc3b3e" @click="registerW">立即注册</van-button>
          </div>
        </van-form>
      </van-popup>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant";
import { validForm } from "../js/validForm";
export default {
  data() {
    return {
      register: {
        phone: "",
        password: "",
        nickname: "",
      },
      show: false,
      registerEye: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
    showPopup() {
      this.show = true;
    },
    // 获取注册表单的信息
    registerW() {
      //构造表单验证信息  注册正则
      let o = {
        phone: {
          value: this.register.phone,
          errorMsg: "手机号格式不正确",
          reg: /^1[3-9]\d{9}$/,
        },
        password: {
          value: this.register.password,
          errorMsg: "密码由数字字母下划线组合(6-16字符)",
          reg: /^[A-Za-z]\w{5,15}$/,
        },
        nickName: {
          value: this.register.nickname,
          errorMsg: "昵称由字母数字下划线汉字组合(1-10字符)",
          reg: /^[\w\u4e00-\u9fa5]{1,10}$/,
        },
      };
      let isPass = validForm.valid(o);
      console.log(isPass);
      if (!isPass) {
        return;
      }
      this.axios({
        method: "get",
        url: "/register",
        params: {
          user: this.register.phone,
          password: this.register.password,
          nickname: this.register.nickname,
        },
      })
        .then((res) => {
          console.log(res);
          Toast("注册成功");
          //关闭注册框
          this.show = false;
        })
        .catch((err) => {});
    },
    //改变密码框的显示方式
    changeEye() {
      this.registerEye = !this.registerEye;
    },
    //获取登录信息
    loginW() {
      //构造表单验证信息  注册正则
      let o = {
        phone: {
          value: this.register.phone,
          errorMsg: "手机号格式不正确",
          reg: /^1[3-9]\d{9}$/,
        },
        password: {
          value: this.register.password,
          errorMsg: "密码由数字字母下划线组合(6-16字符)",
          reg: /^[A-Za-z]\w{5,15}$/,
        },
      };
      let isPass = validForm.valid(o);
      console.log(isPass);
      if (!isPass) {
        return;
      }
      this.axios({
        method: "get",
        url: "/login",
        params: {
          user: this.register.phone,
          password: this.register.password,
        },
      })
        .then((res) => {
          console.log(res);
          // 把一个返回值 存储到本地 用来判断用户是否登录
          if (res.data.status == 300) {
            Toast("登录成功");
            localStorage.setItem("token", res.data.data);
            this.$router.push({ name: "Home" });
          }
        })
        .catch((err) => {});
    },
  },
};
</script>

<style lang="less" scoped>
@import "login.less";
</style>
