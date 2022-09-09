import { login } from '@/api/login';
import { setToken, getToken, removeToken } from '@/libs/utils';

const state = {
  token: getToken()
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

const actions = {
  //用户登陆
  login({ commit }, datas) {
    return new Promise((resolve, reject) => {
      login(datas)
        .then(res => {
          const { data } = res;
          commit('setToken', data);
          setToken(data);
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  //退出登陆
  logout({ commit }) {
    //
  },
  //获取用户信息
  getUserInfo({ commit }) {
    //
  }
};

export default {
  namespaced: true, //开启namespace:true，该模块就成为命名空间模块了
  state,
  mutations,
  actions
};
