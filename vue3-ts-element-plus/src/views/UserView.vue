<template>
  <div class="User">
    <div class="select">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="名字">
          <el-input v-model="selectData.nickName" placeholder="输入关键字" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="selectData.role" class="m-2" placeholder="请选择" size="large">
            <!-- 默认显示全部 -->
            <el-option label="全部" :value="0" />
            <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName" :value="item.roleId" />
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>

      </el-form>
      <el-table :data="list" border stripe style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="nickName" label="用户名" width="180" />
        <el-table-column prop="role" label="用户角色">
          <template #default="scoped">
            <!-- scoped.row: list的每一行数据 -->
            <el-button v-for="item in scoped.row.role" :key="item.id" link type="primary" size="small">
              {{ item.roleName }}
            </el-button>
          </template>
        </el-table-column>

        <el-table-column prop="role" label="操作">
          <template #default="scoped">
            <!-- scoped.row: list的每一行数据 -->
            <el-button type="primary" size="small" style="width:70px;height:30px" @click="changeUser(scoped.row)">
              编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>

  <el-dialog v-model="isShow" title="编辑信息">
    <el-form :model="activeUser">
      <el-form-item label="用户名" label-width="100">
        <el-input v-model="activeUser.nickName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="角色" label-width="100">
        <!-- select 存在multiple属性 接收是个数组,不存在multiple属性 接收是个响应式值 -->
        <!-- 不能把数组赋给响应式值 -->
        <el-select multiple v-model="activeUser.role" placeholder="请选择角色">
          <!-- <el-option v-for="item in activeUser.role" :key="item.role" :label="item.roleName" :value="item.role" /> -->
          <el-option v-for="item in roleList" :key="item.roleId" :label="item.roleName" :value="item.roleId" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="updateUser">更改</el-button>
        <el-button @click="isShow = false">取消</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRaw, toRefs, watch } from 'vue'
import api from '../request/api'
import { dataInt, ListInt, RoleInt, roleInt } from '../type/user'
export default defineComponent({
  name: 'User',
  setup() {
    onMounted(() => {
      getUserList()
      getRoleList()
    })

    let data = reactive(new dataInt())

    function getUserList() {
      api.getUserList().then((res) => {
        data.list = res.data
        console.log(res)
      })
    }
    function getRoleList() {
      api.getRoleList().then((res) => {
        // console.log('RoleList', res)
        data.roleList = res.data
      })
    }

    //查询
    function onSubmit() {
      const role = data.selectData.role
      const nickName = data.selectData.nickName
      if (role || nickName) {
        //indexOf查找是空字符('')则返回为0,首个位置
        api.getUserList().then((res) => {
          data.list = res.data
          data.list = data.list.filter((item) => {
            return (
              item.nickName.indexOf(nickName) !== -1 && item.role.find((item) => item.role === role)
            )
          })
        })
      } else {
        getUserList()
      }
    }

    watch([() => data.selectData.role, () => data.selectData.nickName], () => {
      if (data.selectData.role == 0 || data.selectData.nickName == '') {
        getUserList()
      }
    })

    function changeUser(row: ListInt) {
      console.log(row)
      data.activeUser = {
        id: row.id,
        nickName: row.nickName,
        userName: row.userName,
        role: row.role.map((item: any) => item.role || item.roleId)
      }

      console.log(data.activeUser.role)
      data.isShow = true
    }


    //更新列表
    function updateUser() {
      //找到点击的用户数据
      let findUser: any = data.list.find(item => item.id === data.activeUser.id)

      //找到点击的用户对应的角色表
      //使用数组的indexOf方法
      findUser.role = data.roleList.filter(item => data.activeUser.role.indexOf(item.roleId) !== -1)

      console.log(findUser)
      //在用户信息列表中找到点击的用户数据那一项
      data.list.forEach(item => {
        if (item.id == findUser.id) {
          item = findUser
        }
      })

      data.isShow = false
    }


    return {
      ...toRefs(data),
      onSubmit,
      changeUser,
      updateUser
    }
  },
})
</script>

<style scoped>
</style>