<template>
    <div class="app-header-sticky " :class="{ show: y > 78}">
        <div class="container">
            <RouterLink class="logo" to="/" />
            <LayoutHeaderUl />
            <div class="right">
                <RouterLink to="/">品牌</RouterLink>
                <RouterLink to="/">专题</RouterLink>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts"> 
import { useScroll } from '@vueuse/core'
import LayoutHeaderUl from './LayoutHeaderUl.vue';
const { y } = useScroll(window)


</script>

<style scoped lang="scss">
.app-header-sticky {
    width: 100%;
    height: 80px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    background-color: #fff;
    border-bottom: 1px solid #e4e4e4;
    transform: translateY(-100%);
    opacity: 0;

    &.show {
        transition: all 0.3s linear;
        transform: none;
        opacity: 1;
    }

    .container {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 200px;
        height: 80px;
        background: url("@/assets/images/logo.png") no-repeat right 2px;
        background-size: 160px auto; // 背景宽度为160px / 背景高度为图像本身的大小比例
    }

    .right {
        width: 220px;
        display: flex;
        text-align: center;
        padding-left: 40px;
        border-left: 2px solid $xtxColor;

        a {
            width: 38px;
            margin-right: 40px;
            font-size: 16px;
            line-height: 1; // 行高跟字体高度一样

            &:hover {
                color: $xtxColor;
            }
        }
    }

}
</style>