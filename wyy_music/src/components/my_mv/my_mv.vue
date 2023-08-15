<template>
<div>
  <div class="top">
    <div class="title">网易云MV</div>
  </div>

  <SearchComponent @keyword="parentFn"></SearchComponent>

  <div class="myMvContainer" >
    <div v-for="item in mylist" class="mvlist" @click="clickCard(item.id)" :key="item.id" >
      <img :src="item.cover">
      <span class="palycount">
        {{item.playCount>10000 ? (item.playCount-item.playCount%10000)/10000+'万' : item.playCount }}
      </span>
      <div class="singer">{{item.name}}</div>
      <div class="text">{{item.artistName}}</div>
    </div>
  </div>
</div>
</template>

<script>

//变量要用中括号
import {getMv,getSearch} from "@/network/api";
import SearchComponent from "../search_mv/search_mv"
// import {sum,subtract} from "@/network/es6master";

export default {
  components:{
    SearchComponent
  },
  name: "Hello",
  data(){
    return{
      mylist:[],//视频数据
      playCount:[],//视频观看人数，
    }
  },
  async created() {

    const mv = await getMv('taylor',1004);
    this.mylist=mv.data.result.mvs.slice(0,30)
    // console.log(this.mylist)


  },
  methods:{
    clickCard(id){
      this.$router.push("/mvdetail/"+id)
    },
    //获取子组件输入的值
    async parentFn(event){
      const searchMv=await getSearch(event);
      this.mylist=searchMv.data.result.mvs;

    }
  }
}
</script>

<style scoped>
@import "my_mv.vue.css";
@import "../../../public/css/base.css";
</style>