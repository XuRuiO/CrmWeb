import Vue from 'vue';
import Router from 'vue-router';
import routes from './router';
import { getToken } from '@/libs/utils';
import { layoutName } from '@/config'; //引入自定义配置文件
import store from '@/store';

//引入第三方组件nprogress,路由切换顶部进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
//NProgress初始化配置
NProgress.configure({
  showSpinner: false
});

//要告诉vue，使用VueRouter
Vue.use(Router);

const router = new Router({
  mode: 'history', //在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 # 开头。添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState 来管理记录。
  scrollBehavior: () => ({ y: 0 }), //scrollBehavior解决路由跳转后发现滚动条的位置还保持在原来的位置
  routes
});

/**
 * @description 路由对象的全局钩子函数,跳转之前执行
 * @param1 to：router即将进入的路由对象
 * @param2 from：当前导航即将离开的路由
 * @param3 next：是一个方法，调用这个方法，才能进入下一个钩子
 */
router.beforeEach(async (to, from, next) => {
  //每次切换页面时，调用进度条
  NProgress.start();

  //获取token
  const token = getToken();
  if (!token && to.name === 'login') {
    //未登录且跳转的页面是登录页
    next();
  } else if (!token && to.name !== 'login') {
    //未登陆且跳转的页面不是登录页
    next({
      name: 'login'
    });
  } else if (token && to.name === 'login') {
    //已登录且要跳转的页面是登录页
    next({
      name: layoutName
    });
  } else {
    //获取个人信息
    //TODO

    //获取菜单信息
    await store.dispatch('permission/getRoutesTree');

    //这个一定要加，没有next()页面不会跳转的
    next();
  }
});

/**
 * @description 路由对象的全局钩子函数,跳转之后执行
 * @param1 to：router即将进入的路由对象
 * @param2 from：当前导航即将离开的路由
 */
router.afterEach(to => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done();
});

export default router;
