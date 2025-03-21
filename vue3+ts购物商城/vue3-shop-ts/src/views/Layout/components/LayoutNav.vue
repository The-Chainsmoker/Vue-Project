<template>
    <!-- html5规范: nav 标签(定义导航链接的部分) 包括 a 标签 -->
    <nav class="app-topnav">
        <div class="container">
            <ul>
                <!-- template 标签主要用于逻辑处理、动态渲染, 该标签不被渲染DOM中 -->
                <template v-if="true">
                    <li>
                        <a href="javascript:;">
                            <i class="iconfont icon-user"></i>
                        </a>
                    </li>
                    <li>
                        <el-popconfirm title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
                            <template #reference>
                                <a href="javascript:;">退出登录</a>
                            </template>
                        </el-popconfirm>
                    </li>
                    <li><a href="javascript:;">我的订单</a></li>
                    <li><a href="javascript:;">会员中心</a></li>
                </template>
                <template v-else>
                    <li><a href="javascript:;">请先登录</a></li>
                    <li><a href="javascript:;">帮助中心</a></li>
                    <li><a href="javascript:;">关于我们</a></li>
                </template>
            </ul>
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.app-topnav {
    background: #333;

    ul {
        // background-color: aqua;
        display: flex;
        height: 53px;
        justify-content: flex-end;
        align-items: center;

        li {
            a {
                padding: 0 15px;
                color: #cdcdcd;
                line-height: 53px;
                display: inline-block;

                i {
                    font-size: 14px;
                    margin-right: 20px;
                }

                &:hover {
                    color: $xtxColor;
                }
            }

            /* 以下 ~ 表示在 li 选择器之后出现的所有 li 选择器( 并列关系 ) */
            ~li {
                a {
                    border-left: 2px solid #666;
                }
            }
        }
    }
}
</style>