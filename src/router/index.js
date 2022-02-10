import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';
import PLPPage from '../pages/PLPPage/PLPPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/products',
    name: 'PLPPage',
    component: PLPPage
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../pages/ComponentsPage/ComponentsPage.vue')
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
