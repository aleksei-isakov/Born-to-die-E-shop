import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BaseButtonRouter from './BaseComponents/BaseButtonRouter';
import BaseButton from './BaseComponents/BaseButton';
import BaseButtonLink from './BaseComponents/BaseButtonLink';
import '@/assets/styles/index.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  BaseButtonRouter,
  BaseButton,
  BaseButtonLink,
  render: (h) => h(App)
}).$mount('#app');
