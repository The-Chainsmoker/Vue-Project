<template>
  <div class="mvdetailContainer">
    <div class="title">
      <span class="iconfont icon-fanhui"></span>
      <div class="back" @click="clickBack">返回</div>
      <div class="name">{{mvDataList.name}}</div>
    </div>
    <div class="comment">
      <div class="video">
        <!--&lt;!&ndash;video的with没有px,之前的版本可能有&ndash;&gt;(措施用css控制全屏)-->
        <video :src="mvUrlList" controls autoplay height="208">
        </video>
      </div>
      <div class="conmmentContainer">
        <div class="mvName">{{mvDataList.name}}</div>
        <div class="singerPlay">
          <span class="singer">歌手: {{mvDataList.artistName}}</span>
          <span class="playcount">播放: {{mvDataList.playCount>10000 ? (mvDataList.playCount-mvDataList.playCount%10000)/10000+"万": mvDataList.playCount}}</span>
        </div>
        <br>
        <div class="pubilc">发行: {{mvDataList.publishTime}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import {getMvData, getMvUrl} from "@/network/api";

export default {
  name: "mvdetail",
  data() {
    return {
      id: "",
      mvDataList: {},//视频信息
      mvUrlList: "",//视频数据
    }
  },
  created() {
    this.getMvDetailInfo()
  },
  methods: {
    clickBack() {
      history.back();
    },
    async getMvDetailInfo() {
      this.id = this.$route.params.id;
      const mvData = await getMvData(this.id);
      const mvUrl = await getMvUrl(this.id);
      //视频数据
      this.mvDataList = mvData.data.data;
      //视频MP4
      this.mvUrlList = mvUrl.data.data.url;
      console.log(this.mvDataList)


    }
  }
}
</script>

<style scoped>
@import "mvdetail.css";
@import "http://at.alicdn.com/t/font_2667480_emo6fuxc71.css";
</style>