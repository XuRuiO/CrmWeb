import Cookies from 'js-cookie'; //引入js-cookie组件
import config from '@/config';

//前端Cookie的过期日期，默认1天
const { cookieExpires } = config;

//定义token的键
const tokenKey = 'AdminToken';

//#region Token 的获取、设置、删除 方法

export const setToken = token => {
  Cookies.set(tokenKey, token, { expires: cookieExpires || 1 });
};

export const getToken = () => {
  const token = Cookies.get(tokenKey);
  if (token) return token;
  else return false;
};

export const removeToken = () => {
  Cookies.remove(tokenKey);
};

//#endregion
