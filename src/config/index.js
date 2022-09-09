module.exports = {
  /**
   * @description 系统标题
   */
  title: '后台管理系统',
  /**
   * @description 前端Cookie的过期日期，默认1天
   */
  cookieExpires: 0.5,
  /**
   * @description api请求基础路径
   */
  baseUrl: {
    //开发环境
    //dev: 'http://192.168.20.17:1001/',  //本地部署的iis代码
    dev: 'http://127.0.0.1:5000/', //本地代码设置之后，可以联调
    //生产环境
    pro: 'http://140.143.237.11:9093/'
  },
  /**
   * @description 默认打开的首页的路由路径
   */
  layoutPath: '/dashboard',
  /**
   *@description 根据接口的路由对象，动态导入路由文件
   */
  importRouterFiles: {
    dev(filePath) {
      return require('@/views' + filePath + '.vue').default;
    },
    pro(filePath) {
      return import('@/views' + filePath + '.vue');
    }
  }
};
