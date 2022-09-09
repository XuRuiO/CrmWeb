import Cookies from 'js-cookie'; //引入js-cookie组件
import { cookieExpires } from '@/config'; //引入自定义的配置文件

//定义token的键
const tokenKey = 'AdminToken';

//#region Token 的获取、设置、删除 方法

export const setToken = token => {
  //通过时间戳，设置更小单位
  let seconds = 3600; //秒
  let expires = new Date(new Date() * 1 + seconds * 1000);
  // return Cookies.set(tokenKey, token, { expires: cookieExpires });
  return Cookies.set(tokenKey, token, { expires: expires });
};

export const getToken = () => {
  const token = Cookies.get(tokenKey);
  if (token) return token;
  else return false;
};

export const removeToken = () => {
  return Cookies.remove(tokenKey);
};

//#endregion

//#region Routers 菜单相关的方法

/**
 * @description 过滤菜单数据中，IsHidden===true 的数据
 * @param {Array}  routers  菜单数据源
 */
export const filterIsHiddenMenu = routers => {
  return routers.filter(item => !item.meta.isHidden);
};

//#endregion
