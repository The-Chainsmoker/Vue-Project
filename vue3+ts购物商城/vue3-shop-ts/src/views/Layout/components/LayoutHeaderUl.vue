<template>
    <ul class="app-header-nav">
        <li class="home">
            <RouterLink to="/">首页</RouterLink>
        </li>
        <template v-for="item in categoryStore.categoryList" :key="item.id">
            <li class="home">
                <RouterLink to="/">{{ item.name }}</RouterLink>
            </li>
        </template>

        <!-- <li>
                    <RouterLink to="/">居家</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">美食</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">服饰</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">母婴</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">个护</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">严选</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">数码</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">运动</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">杂项</RouterLink>
                </li> -->
    </ul>
</template>

<script setup lang="ts">
//vue 自带工具类

import { useCategoryStore } from '@/store/categoryStore'
// const ele = ref<HTMLBRElement | null >(null)
const categoryStore = useCategoryStore()
</script>

<style scoped lang="scss">
        .app-header-nav {
            width: 820px;
            display: flex;
            padding-left: 40px;
            position: relative;
            z-index: 998;
    
            li {
                margin-right: 40px;
                width: 38px;
                text-align: center;
    
                a {
                    font-size: 16px;
                    line-height: 32px;
                    height: 32px;
                    display: inline-block;
    
                    &:hover {
                        color: $xtxColor;
                        border-bottom: 1px solid $xtxColor;
                    }
    
                    .active {
                        color: $xtxColor;
                        border-bottom: 1px solid $xtxColor;
                    }
                }
            }
    
        }
</style>