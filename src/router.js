import Vue from 'vue';
import Router from 'vue-router';

// 引入组件    @ 表示 路径/src

// 要告诉vue，使用VueRouter
Vue.use(Router);

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面不会缓存
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 * }
 */

export default new Router({
  mode: 'history', //在创建的 router 对象中，如果不配置 mode，就会使用默认的 hash 模式，该模式下会将路径格式化为 #! 开头。添加 mode: 'history' 之后将使用 HTML5 history 模式，该模式下没有 # 前缀，而且可以使用 pushState 和 replaceState 来管理记录。
  routes: [
    // {
    //   path: '/',
    //   name: 'login',
    //   meta: {
    //     title: '登录',
    //     hideInMenu: true
    //   },
    //   component: () => import('@/views/login/login')
    // },
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页',
        hideInMenu: true
      },
      component: () => import('@/views/home/home')
    }
  ]
});
