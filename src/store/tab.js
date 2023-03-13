export default {
    state: {
        isCollapse: false,   // 用于控制菜单展开/收起
        // 面包屑数据
        tabsList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            }
        ]
    },
    mutations: {
        // 修改菜单展开/收起
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        },
        // 更新面包屑
        selectMenu(state, item) {
            if(!state.tabsList.some(obj => obj.name === item.name)) {
                state.tabsList.push(item);
            }
        },
        // 删除指定tag数据
        closeTag(state, item) {
            const index = state.tabsList.findIndex(val => val.name === item.name);
            state.tabsList.splice(index, 1);
        }
    }
}