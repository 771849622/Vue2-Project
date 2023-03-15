import Cookie from "js-cookie";
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
        ],
        menu: []
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
        },
        // 设置menu的数据
        setMenu(state, val) {
            state.menu = val;
            Cookie.set('menu', JSON.stringify(val));
        },
        // 动态注册路由
        addMenu(state, router) {
            // 判断缓存中是否有数据
            if(!Cookie.get('menu')) return;
            const menu = JSON.parse(Cookie.get('menu'));
            state.menu = menu;
            console.log(menu);
            // 组装动态路由数据
            const menuArray = [];
            menu.forEach(item => {
                if(item.children) {
                    item.children = item.children.map(subItem => {
                        subItem.component = () => import(`../views/${subItem.url}`);
                        return subItem;
                    })
                    menuArray.push(...item.children);
                }else {
                    item.component = () => import(`../views/${item.url}`);
                    menuArray.push(item);
                }
            });
            console.log(menuArray);
            // 路由的动态添加
            menuArray.forEach(item => {
                router.addRoute('Main', item);
            })
        }
    }
}