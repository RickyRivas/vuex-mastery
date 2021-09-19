import { createStore } from 'vuex';
import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import counterModule from './counter/index';
const store = createStore({
  modules: {
    numbers: counterModule
  },
  // the state config stores data for global use. Similar to the data config in the main vue
  state() {
    return {
      isLoggedIn: false
    };
  },
  // Mutations are the only way to change a state globally via Vuex // Vue provides 'state' and 'payload' as arguments
  mutations: rootMutations,
  // used for aynchronous functions // Vue provides 'context' and 'payload' as arguments
  actions: rootActions,
  // Computed properties // triggers when one of its dependancies change
  getters: rootGetters
});
export default store;
