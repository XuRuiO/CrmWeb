import { getMenuNavigationBarTree } from '@/api/permission';

const state = {
  routes: [], //渲染菜单导航
  addRoutes: [] //追加路由对象
};

const mutations = {
  setRoutes: (state, routes) => {
    state.routes = routes;
  }
};

const actions = {
  getRoutesTree({ commit }, datas) {
    return new Promise((resolve, reject) => {
      getMenuNavigationBarTree()
        .then(res => {
          const { Data } = res;
          console.log(Data);
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default {
  namespaced: true, //开启namespace:true，该模块就成为命名空间模块了
  state,
  mutations,
  actions
};
