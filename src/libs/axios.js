import axios from 'axios'; //一个基于Promise（ES6中用于处理异步的）的HTTP库
import { baseUrl } from '@/config'; //引入自定义的配置文件
import { Message, MessageBox } from 'element-ui';

//创建axios实例
const instance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? baseUrl.dev : baseUrl.pro,
  timeout: 5000 //指定请求超时的毫秒数(0 表示无超时时间)
});

//添加请求拦截器
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//添加响应拦截器
instance.interceptors.response.use(
  response => {
    const res = response.data;

    if (res.StatusCode === 200) {
      return res;
    } else {
      Message({
        showClose: true,
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      });

      //403：请求TOKEN失效
      if (res.StatusCode === 403) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log('跳转到登陆页面');
        });
      }

      return Promise.reject(new Error(res.message || 'Error'));
      //return Promise.reject(response);
    }
  },
  error => {
    if (error.response) {
      return Promise.reject(error);
    } else {
      Message({
        showClose: true,
        message: '请求超时, 请刷新重试',
        type: 'error',
        duration: 5 * 1000
      });

      return Promise.reject(error);
    }
  }
);

export default instance;
