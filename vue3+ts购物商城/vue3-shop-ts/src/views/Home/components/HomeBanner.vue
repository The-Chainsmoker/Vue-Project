<template>
    <div class="home-banner">
        <el-carousel height="500px">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
                <!-- <img  :src="item.imgUrl" alt=""> -->
                <img v-img-lazy="item.imgUrl" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup lang="ts">
import { getBannerAPI } from '@/apis'
import { InitData } from '@/type/banner'
import {ref,onMounted} from 'vue'

const bannerList = ref(new InitData().getBannerList)

const getBanner = async () => {
    let ret:any = await getBannerAPI()
    console.log('轮播图数据:', ret);
    bannerList.value = ret.result
}

onMounted(() => {
    getBanner()
})

</script>

<style scoped lang="scss">
.home-banner{
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;
}
</style>