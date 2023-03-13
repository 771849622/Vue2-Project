import Vue from 'vue';
import App from './App.vue';
// 全局引入
import ElementUI from 'element-ui';
// 按需引入
// import { Button, Row } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import '@/api/mock';

Vue.config.productionTip = false;
Vue.use(ElementUI);
// Vue.use(Button);
// Vue.use(Row);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');