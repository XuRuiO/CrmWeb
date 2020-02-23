import Vue from 'vue'; //导入内置的vue模块(npm的node_module里面)
import App from './App.vue'; //导入当前目录的App文件为App
import router from './router'; // import router 的router 一定要小写， 不要写成Router, 否则报can't match的报错
import store from './store'; //vuex 状态管理
import config from '@/config'; //自定义的config配置文件

// 引入Element-Ui组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入全局样式文件
import '@/styles/index.less';

// 告诉vue使用Element-Ui组件
Vue.use(ElementUI, { size: 'medium' });

Vue.config.productionTip = true; //true:作用是阻止 vue 在启动时生成生产提示。
Vue.config.silent = true; //取消 Vue 所有的日志与警告

/**
 * @description 将自定义的config配置文件全局注册到Vue实例上，仅在Vue实例中使用
 */
Vue.prototype.$config = config;

// 挂在元素得两种方法：
// 方法一
new Vue({
  el: '#app', //vue父实例的挂载点
  router, // 注入到根实例中
  store, //注册store(这可以把 store 的实例注入所有的子组件)
  render: h => h(App)
});

// 方法二
// new Vue({
//   router,
//   store, //注册store(这可以把 store 的实例注入所有的子组件)
//   render: h => h(App) //渲染组件,使用导入的App,es6对象写法
// }).$mount('#app');
