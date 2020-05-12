import { filterIsHiddenMenu } from '@/libs/utils';
import { initialToLowerCase } from '@/libs/tools';
import { getMenuNavigationBarTree } from '@/api/permission';

const state = {
  routes: [], //渲染菜单导航
  addRoutes: [] //追加路由对象
};

const mutations = {
  setRoutes: (state, routes) => {
    state.routes = routes;
  },
  setAddRoutes: (state, asyncRoutes) => {
    state.addRoutes = asyncRoutes;
  }
};

const actions = {
  getRoutesTree({ commit }, datas) {
    return new Promise((resolve, reject) => {
      getMenuNavigationBarTree().then(res => {
        const { Data } = res;

        var routers = filterIsHiddenMenu(Data);
        //存入菜单数据
        commit('setRoutes', routers);

        //生成路由对象
        var asyncRoutes = initialToLowerCase(Data);
        commit('setAddRoutes', asyncRoutes);

        resolve();
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
