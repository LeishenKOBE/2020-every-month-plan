import './css/index.css';
import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store/index.js';
import routes from './routes/index.js';
import VueRouter from 'vue-router';
import {Button} from 'ant-design-vue';

Vue.use(VueRouter);
Vue.use(Button);
Vue.use(Vuex);
const newStore = new Vuex.Store(store);
const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  store: newStore,
  router,
}).$mount('#app');
