<template>
  <div class="search">
    <div class="input-text">
      <form action="">
        <input type="text" placeholder="搜索" v-model="keyword" @keyup="chance"/>
        <!--<input type="text" style="display: none" />-->
      </form>
    </div>
  </div>
</template>

<script>
import {getSearch} from "@/network/api";
export default {
  name: "search_mv",
  data(){
    return{
      keyword:''
    }
  },
  methods:{
    chance(even){
      this.$emit('keyword',this.keyword)
    }
  }



}
</script>

<style scoped>
@import "search_mv.css";
</style>