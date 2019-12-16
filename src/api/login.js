import request from '@/libs/axios';

/**
 * @description 登陆接口
 */
export const login = data => request({ url: '/api/Login/Login', method: 'get', params: data });
