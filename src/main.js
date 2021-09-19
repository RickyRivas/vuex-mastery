import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';

const app = createApp(App);

// Vuex is a library for managing global state
app.use(store);
app.mount('#app');
