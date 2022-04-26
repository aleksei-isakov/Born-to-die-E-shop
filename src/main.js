import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as BaseComponents from './base_components';
import '@/assets/styles/index.scss';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { VueMaskDirective } from 'v-mask';

import interceptorsSetup from '@/api/interceptors';

interceptorsSetup();

Vue.directive('mask', VueMaskDirective);
Vue.config.productionTip = false;

Vue.filter('currency', function (value) {
  return `${value.toFixed(1)} $`;
});

new Vue({
  router,
  store,
  BaseComponents,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
