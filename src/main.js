import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as BaseComponents from './base_components';
import '@/assets/styles/index.scss';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@fortawesome/fontawesome-free/css/all.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BaseComponents,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
