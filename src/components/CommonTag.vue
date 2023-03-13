<template>
    <div class="tabs">
        <el-tag @click="changeMenu(item)" v-for="(item, index) in tags" :key="item.path" :closable="item.name !== 'home'"
            :effect="$route.name === item.name ? 'dark' : 'plain'" @close="handleClose(item, index)" size="small">
            {{ item.label }}
        </el-tag>
    </div>
</template>

<script>
// 引入vuex辅助函数
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'CommonTag',
    data() {
        return {

        }
    },
    methods: {
        ...mapMutations(['closeTag']),
        // 点击tag跳转功能
        changeMenu(item) {
            console.log(item);
            this.$router.push({name: item.name})
        },
        // 点击tag删除功能
        handleClose(item, index) {
            // 调用Mutation的删除tag方法
            this.closeTag(item);
            // 删除之后跳转逻辑
            const length = this.tags.length;
            if(item.name !== this.$route.name) {
                return;
            }else {
                if(length === index) {
                    this.$router.push({name: this.tags[index - 1].name})
                }else {
                    this.$router.push({name: this.tags[index].name})
                }
            }
        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
}
</script>

<style lang="scss" scoped>
.tabs {
    padding: 20px;
    .el-tag {
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>