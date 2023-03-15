<template>
    <div>
        <el-container>
            <!-- 侧边菜单 -->
            <el-aside width="auto">
                <common-aside></common-aside>
            </el-aside>
            <!-- 右侧内容 -->
            <el-container>
                <!-- 头部 -->
                <el-header>
                    <common-header></common-header>
                </el-header>
                <!-- 面包屑 -->
                <common-tag></common-tag>
                <!-- 主体内容 -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'
export default {
    name: 'Main',
    components: { CommonAside, CommonHeader, CommonTag },
}
</script>

<style lang="scss" scoped>
.el-header {
    padding: 0;
}
.el-main {
    padding-top: 0;
}
</style>