// 引入自定义组件    @ 表示 根路径/src，_c 表示 根路径/src/components

/**
 * meta除了原生参数外可配置的参数:
 * meta: {
 *  title: 侧边栏、面包屑的名称
 *  icon: 该页面在左侧菜单、面包屑和标签导航处显示的图标
 *  isHidden：是否隐藏菜单在侧边导航栏出现
 *  isAffix：是否固钉在tagsView（标签导航）中，不可被删除
 *  IsUseLayout：是否使用Layout页面
 *  orderSort：排序序号
 * }
 */

/**
 * @description 代表那些不需要动态判断权限的路由，如登录页、404、等通用页面
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/401',
    component: () => import('@/views/error/401')
  },
  {
    path: '/404',
    component: () => import('@/views/error/404')
  }
];
