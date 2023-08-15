<template>
  <div class="RoleView">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-button type="primary" @click="addRole()">添加角色</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="list" stripe style="width: 100%">
      <el-table-column prop="roleId" label="ID" width="180" />
      <el-table-column prop="roleName" label="角色名" width="180" />
      <el-table-column prop="authority" label="操作">
        <template #default="scoped">
          <el-button link size="small" @click="changeRole(scoped.row)">
            修改权限
          </el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'

import { ElMessage, ElMessageBox } from 'element-plus'
// 解决 引入ElMessage, ElMessageBox 不能正常显示错误
import 'element-plus/es/components/message-box/style/index'
import 'element-plus/es/components/message/style/index'
import api from '@/request/api'
import { InitData, ListInt } from "@/type/role"
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'RoleView',
  setup() {
    onMounted(() => {
      api.getRoleList().then(res => {
        console.log(res)
        data.list = res.data
      })
    })

    const router = useRouter()

    const data = reactive(new InitData())

    const addRole = () => {
      ElMessageBox.prompt('请输入角色名称', '添加', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      })
        .then(({ value }) => {
          if (value) {
            data.list.push({ roleId: data.list.length + 1, roleName: value, authority: [] })
          }

          ElMessage({
            type: 'success',
            message: `输入的角色是${value}`,
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消输入',
          })
        })
    }

    const changeRole = (row: ListInt) => {
      // console.log(row.roleId, row.authority)
      router.push({
        name: 'AuthorityView',
        params: {
          id: row.roleId,
          authority: row.authority
        }
      })
    }

    return {
      ...toRefs(data),
      addRole,
      changeRole
    }
  }
})
</script>

<style scoped>
</style>