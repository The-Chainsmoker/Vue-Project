<template>
    <!-- 左侧分类和轮播图 -->
    <div class="home-category">
        <ul class="menu">
            <li v-for="item in categoryStore.categoryList" :key="item.id">
                <RouterLink to="/">{{ item.name }}</RouterLink>
                <RouterLink v-for="i in item.children?.slice(0,2)" :key="i.id" to="/">{{ i.name }}</RouterLink>
                <!-- 弹层界面 -->
                <div class="layer">
                    <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
                    <ul>
                        <li v-for="i in item.goods" :key="i.id">
                            <RouterLink to="/">
                                <img :src="i.picture" alt="">
                                <div class="info">
                                    <p class="name ellipsis-2">
                                        {{ i.name }}
                                    </p>
                                    <p class="desc ellipsis">{{ i.desc }}</p>
                                    <p class="price"><i>¥</i>{{ i.price }}</p>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>

            <!-- <li v-for="item in 9" :key="item">
                <RouterLink to="/">居家</RouterLink>
                <RouterLink v-for="i in 2" :key="i" to="/">南北干货</RouterLink>

                <div class="layer">
                    <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
                    <ul>
                        <li v-for="i in 5" :key="i">
                            <RouterLink to="/">
                                <img alt="">
                                <div class="info">
                                    <div class="name ellipsis-2">
                                        男士外套
                                    </div>
                                    <div class="desc ellipsis">男士外套，冬季必选</div>
                                    <p class="price"><i>¥</i>200.00</p>
                                </div>
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li> -->
        </ul>
    </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/store/categoryStore'
const categoryStore = useCategoryStore()

</script>

<style scoped lang="scss">
.home-category {
    width: 250px;
    height: 500px;
    // background: rgba(0, 0, 0, 0.8);
    position: relative;
    z-index: 99;

    .menu {
        li {
            padding-left: 40px;
            height: 55px;
            line-height: 55px;

            a {
                margin-right: 4px;
                color: #fff;

                &:first-child {
                    font-size: 16px;
                }
            }

            .layer {
                width: 990px;
                height: 500px;
                background: rgba(255, 255, 255, 0.8);
                position: absolute;
                left: 250px;
                top: 0;
                display: none;
                padding: 0 15px;

                h4 {
                    font-size: 20px;
                    font-weight: normal;
                    line-height: 80px;

                    small {
                        font-size: 16px;
                        color: #666;
                    }
                }

                ul {
                    display: flex;
                    flex-wrap: wrap;

                    li {
                        width: 310px;
                        height: 120px;
                        margin-right: 15px;
                        margin-bottom: 15px;
                        border: 1px solid #eee;
                        border-radius: 4px;
                        background: #fff;

                        &:nth-child(3n) {
                            margin-right: 0;
                        }

                        a {
                            display: flex;
                            width: 100%;
                            height: 100%;
                            align-items: center;
                            padding: 10px;

                            &:hover {
                                background: #e3f9f4;
                            }

                            img {
                                width: 95px;
                                height: 95px;
                            }

                            .info {
                                padding-left: 10px;
                                line-height: 24px;
                                overflow: hidden;

                                .name {
                                    font-size: 16px;
                                    color: #666;
                                }

                                .desc {
                                    color: #999;
                                }

                                .price {
                                    font-size: 22px;
                                    color: $priceColor;

                                    i {
                                        font-size: 16px;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            // 关键样式  hover状态下的layer盒子变成block
            // 子元素(layer)，使用了绝对定位也会被父元素的 伪类选择器 所影响到
            &:hover {
                background: $xtxColor;

                .layer {
                    display: block;
                }
            }
        }
    }
}
</style>