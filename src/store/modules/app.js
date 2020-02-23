const state = {
  aside: {
    isCollapse: false //是否将左侧导航栏折叠，默认展开(false)
  }
};

const mutations = {
  setAside: state => {
    state.aside.isCollapse = !state.aside.isCollapse;
  }
};

const actions = {
  commitSetAside({ commit }) {
    commit('setAside');
  }
};

export default {
  namespaced: true, //开启namespace:true，该模块就成为命名空间模块了
  state,
  mutations,
  actions
};
