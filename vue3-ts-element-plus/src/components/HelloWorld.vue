<template>
  <div class="hello">
    <el-container>
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <img src="../assets/logo.png" alt="" class="logo">
          </el-col>
          <el-col :span="16">
            <h2>后台管理系统</h2>
          </el-col>
          <el-col :span="4">
            <span class="quit-login" @click="loginBack">退出登录</span>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
            :default-active="active" text-color="#fff" router>
            <!-- @open="handleOpen" @close="handleClose" -->
            <el-menu-item :index="item.path" v-for="item in list" :key="item.path">
              <!-- <el-icon>
                <icon-menu />
              </el-icon> -->
              <span>{{ item.meta.title }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const router = useRouter()
    const route = useRoute()

    const list = router.getRoutes().filter((item) => item.meta.show)
    console.log(list)

    function loginBack() {
      localStorage.removeItem('token')
      router.push('/login')
    }

    return {
      list,
      active: route.path, //默认显示路径
      loginBack
    }
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-header {
  height: 80px;
  background-color: #676668;

  .logo {
    height: 80px;
  }

  h2,
  .quit-login {
    display: block;
    text-align: center;
    height: 80px;
    line-height: 80px;
    color: #fff;
  }
}

.el-aside {
  .el-menu {
    height: calc(100vh - 80px);
    background-color: #535b63;
  }
}

.el-main {
  height: calc(100vh - 80px);
}
</style>
