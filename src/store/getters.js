const getters = {
  getAside: state => state.app.aside,
  getToken: state => state.user.token,
  getRoutes: state => state.permission.routes,
  getAddRoutes: state => state.permission.addRoutes
};

export default getters;
