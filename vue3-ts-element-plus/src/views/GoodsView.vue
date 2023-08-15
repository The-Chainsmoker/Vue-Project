<template>
  <div class="GoodsView" @keyup.enter="onSubmit">
    <div class="select">
      <el-form :inline="true" :model="selectData" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="selectData.title" placeholder="输入关键字" />
        </el-form-item>
        <el-form-item label="详情">
          <el-input v-model="selectData.introduce" placeholder="输入关键字" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-table :data="comList" border stripe style="width: 100%">
          <el-table-column prop="id" label="商品序号" width="180" />
          <el-table-column prop="title" label="商品名称" width="180" />
          <el-table-column prop="introduce" label="商品介绍" />
        </el-table>
        <div class="example-pagination-block">
          <el-pagination layout="sizes,prev, pager, next" :total="selectData.count" @current-change="currentChange"
            @size-change="sizeChange" @prev-click="prevClick" @next-click="nextClick" :page-size="selectData.pagesize"
            :page-sizes="[5, 10, 15]" />
        </div>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, toRefs, watch } from 'vue'
import api from '../request/api'
import { InitData, ListInt } from '../type/goods'
export default defineComponent({
  name: 'GoodsView',
  setup() {
    //初始化数据
    const data = reactive(new InitData())
    onMounted(() => {
      getGoods()
    })
    const getGoods = () => {
      api.goodsList().then((res) => {
        data.list = res.data
        data.selectData.count = res.data.length
      })
    }
    //根据分页器变化而变化的数据
    const dataList = reactive({
      comList: computed(() => {
        const page = data.selectData.page
        const pagesize = data.selectData.pagesize
        return data.list.slice((page - 1) * pagesize, page * pagesize)
      }),
    })
    //点击页码,当前页
    function currentChange(page: number) {
      // console.log(page)
      data.selectData.page = page
    }

    //选择每页条数(分页器的每页条数框触发该事件)
    function sizeChange(pagesize: number) {
      console.log(pagesize)
      data.selectData.pagesize = pagesize
    }
    //点击上一页
    function prevClick(page: number) {
      // console.log(page)
      data.selectData.page = page
    }
    //点击下一页
    function nextClick(page: number) {
      // console.log(page)
      data.selectData.page = page
    }

    //条件查询
    function onSubmit() {
      const title = data.selectData.title
      const introduce = data.selectData.introduce
      // let arr: ListInt[]
      if (title || introduce) {
        //indexOf查找是空字符('')则返回为0,首个位置
        api.goodsList().then((res) => {
          data.list = res.data
          data.list = data.list.filter((item) => {
            return item.title.indexOf(title) !== -1 && item.title.indexOf(introduce) !== -1
          })
          data.selectData.count = data.list.length
        })
      } else {
        getGoods()
      }
    }
    //监听条件查询为空
    watch([() => data.selectData.title, () => data.selectData.introduce], () => {
      const title = data.selectData.title
      const introduce = data.selectData.introduce
      if (!title && !introduce) {
        //默认显示全部的数据
        getGoods()
      }
    })
    return {
      ...toRefs(data),
      onSubmit,
      sizeChange,
      currentChange,
      ...toRefs(dataList),
      prevClick,
      nextClick,
    }
  },
})
</script>

<style  scoped lang="scss">
.example-pagination-block {
  margin-top: 10px;
}
</style>