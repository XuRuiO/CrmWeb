/*
 * @Author: 花果
 * @Date: 2020-02-02 12:02:42
 * @LastEditors: 花果
 * @LastEditTime: 2021-10-20 20:27:06
 * @Description: 
 */
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
          const { Data } = res;
          commit('setToken', Data);
          setToken(Data);
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
