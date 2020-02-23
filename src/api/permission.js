import request from '@/libs/axios';

/**
 * @description 获取菜单接口，生成前端路由、菜单
 */
export const getMenuNavigationBarTree = () => request({ url: '/api/Permission/GetMenuNavigationBarTree', method: 'post' });
