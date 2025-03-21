<template>
    <!-- html5规范: header 标签定义文档的页眉 -->
    <header class="app-header">
        <div class="container">
            <div class="logo">
                <RouterLink to="/">小兔鲜</RouterLink>
            </div>
            <ul class="app-header-nav">
                <!-- <li class="home">
                    <RouterLink to="/">首页</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">居家</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">美食</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">a服饰</RouterLink>
                </li> -->

                <template v-for="item in categoryStore.categoryList" :key="item.id">
                    <li class="home">
                        <RouterLink to="/">{{ item.name }}</RouterLink>
                    </li>
                </template>
            </ul>

            <div class="search">
                <i class="iconfont icon-search"></i>
                <input type="text" placeholder="搜一搜">
            </div>
            <!-- head ==> cart 部分 -->
        </div>
    </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoryStore } from '@/store/categoryStore'
const categoryStore = useCategoryStore()
onMounted(() => {
    categoryStore.getCategory()
})
</script>

<style scoped lang="scss">
.app-header {
    background: #fff;

    .container {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 200px;

        a {
            display: block;
            height: 132px;
            width: 100%;
            // 字体缩进,向左移动 9999 px
            text-indent: -9999px;
            background: url('@/assets/images/logo.png') no-repeat center 18px /contain;
            // background-position / background-size => center 18px /contain
        }
    }

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
                // display: block;
                font-size: 16px;
                /* 行内元素的行高可以影响流式布局 */
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

        .search {
            width: 170px;
            height: 32px;
            line-height: 32px;
            position: relative;
            border-bottom: 1px solid #e7e7e7;

            .icon-search {
                font-size: 18px;
                margin-right: 5px;
            }

            input {
                width: 140px;
                padding-left: 5px;
                color: #666;
            }
        }

        .cart {}


    }
}
</style>