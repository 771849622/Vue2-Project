import Vue from "vue";
import VueRouter from "vue-router";
import Home from '../views/Home';
import User from '../views/User';
import Main from '../views/Main';
import Mall from '../views/Mall';
import PageOne from '../views/PageOne';
import PageTwo from '../views/PageTwo';

// 1、创建路由组件
// 2、将路由与组件进行映射

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Main,
        redirect: '/home',  // 重定向
        children: [
            {path: 'home', name: 'home', component: Home},   // 首页
            {path: 'user', name: 'user', component: User},   // 用户
            {path: 'mall', name: 'mall', component: Mall},   // 商城
            {path: 'page1', name: 'page1', component: PageOne},   // 页面1
            {path: 'page2', name: 'page2', component: PageTwo},   // 页面2
        ]
    },
]
const router = new VueRouter({
    routes
})

export default router;