import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';
import PlpPage from '../pages/PlpPage/PlpPage.vue';
import PdpPage from '@/pages/PdpPage/PdpPage';
import ShoppingCartPage from '@/pages/ShoppingCartPage/ShoppingCartPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import ProfilePageMobile from '@/pages/ProfilePage/ProfilePageMobile';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/products',
    name: 'PlpPage',
    component: PlpPage
  },
  {
    path: '/products/:id',
    name: 'PdpPage',
    component: PdpPage
  },
  {
    path: '/cart',
    name: 'ShoppingCartPage',
    component: ShoppingCartPage
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage
  },
  {
    path: '/profile-mobile',
    name: 'ProfilePageMobile',
    component: ProfilePageMobile
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
