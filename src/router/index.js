import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
