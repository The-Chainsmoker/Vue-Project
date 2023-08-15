<template>
  <div class="login-box">
    <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="60px" class="demo-ruleForm">
      <h2>后台管理系统</h2>
      <el-form-item label="账号:" prop="username">
        <el-input v-model="ruleForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)" class="el-button">
          登录
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue'
import { LoginData } from '../type/login'
import type { FormInstance } from 'element-plus'
import api from '../request/api'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    //储存用户/密码数据
    let data = reactive(new LoginData())
    //校验规则
    let rules = {
      username: [
        { required: true, message: '用户名不为空！', trigger: 'blur' },
        { min: 3, max: 10, message: '用户名长度为3到10', trigger: 'blur' },
      ],
      password: [
        //trigger: blur输入框失去焦点触发 change输入框值改变时
        { required: true, message: '密码不为空！', trigger: 'blur' },
        { min: 3, max: 10, message: '密码长度为3到10', trigger: 'blur' },
      ],
    }
    //获取表单节点
    const ruleFormRef = ref<FormInstance>()
    //引入路由
    const router = useRouter() //相当于this.$router
    //登录
    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return
      await formEl.validate((valid, fields) => {
        if (valid) {
          // console.log('校验成功')

          localStorage.setItem('token', 'aaaa')
          router.push('/')

          console.log(data.ruleForm)
          // api.login(data.ruleForm).then((res) => {
          //   console.log(res)
          //   localStorage.setItem('token', res.data.token)
          //   router.push('/')
          // })
        } else {
          //错误信息
          console.log('校验失败', fields)
        }
      })
    }

    //重置
    let resetForm = (formEl: FormInstance | undefined) => {
      // data.ruleForm.username = ''
      // data.ruleForm.password = ''
      //重置表单
      if (!formEl) return
      formEl.resetFields()
    }
    return {
      ...toRefs(data),
      rules,
      resetForm,
      submitForm,
      ruleFormRef,
    }
  },
})
</script>

<style scoped lang='scss' >
.login-box {
  width: 100%;
  height: 100%;
  background-image: url('../assets/snow.png');
  overflow: hidden;

  .demo-ruleForm {
    width: 500px;
    margin: 200px auto;
    background-color: #fff;
    border-radius: 20px;
    padding: 30px;
  }

  .el-button {
    width: 48%;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>