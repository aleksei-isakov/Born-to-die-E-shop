import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as BaseComponents from './base components';
import '@/assets/styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BaseComponents,
  render: (h) => h(App)
}).$mount('#app');
