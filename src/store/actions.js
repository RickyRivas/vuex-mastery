export default {
  loggedIn(context) {
    context.commit('setAuth', { isAuth: true });
  },
  loggedOut(context) {
    context.commit('setAuth', { isAuth: false });
  }
};
