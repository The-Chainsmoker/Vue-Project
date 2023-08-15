<template>
  <div>
    <!-- Vue3绑定是ref是响应式数据/Proxy -->
    <el-tree ref="treeRef" :data="list" show-checkbox node-key="roleId" :default-checked-keys="authority"
      :default-expanded-keys="list" :check-strictly="true" :props="{
        children: 'roleList',
        label: 'name',
      }" />

    <el-button @click="changeAuthority">确认修改</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { InitData } from '@/type/authority'
import api from '@/request/api'
export default defineComponent({
  name: 'AuthorityView',

  setup() {
    let route = useRoute()
    const params: any = route.params
    const id = params.roleId
    const authority = params.authority

    console.log(authority);

    const data = reactive(new InitData(id, authority))
    onMounted(() => {
      api.getAuthorityList().then(res => {
        console.log('AuthorityList', res);
        data.list = res.data
      })
    })

    function changeAuthority() {
      console.log(data.treeRef.getCheckedKeys().sort((a: number, b: number) => a - b));

    }



    return {
      ...toRefs(data),
      changeAuthority
    }
  }
})
</script>

<style scoped>

</style>