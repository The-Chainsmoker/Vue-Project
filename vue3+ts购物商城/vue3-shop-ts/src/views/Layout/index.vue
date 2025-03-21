<template>
    <LayoutFixed/>
    <LayoutNav/>
    <LayoutHeader/>
    <!-- 主体内容区域 -->
    <RouterView/> 
    <LayoutFooter/>
</template>

<script setup lang="ts">
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from './components/LayoutFixed.vue'
/* typescript 版本5 接口导入需要在前面加上 type */
import { InitData, type getCategory } from '@/type/layout'

</script>

<style scoped lang="scss">
</style>