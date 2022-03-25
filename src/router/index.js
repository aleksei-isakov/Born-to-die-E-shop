import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';
import PlpPage from '../pages/PlpPage/PlpPage.vue';
import PdpPage from '@/pages/PdpPage/PdpPage';
import ShoppingCartPage from '@/pages/ShoppingCartPage/ShoppingCartPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      breadCrumb: [{ text: 'Home' }]
    }
  },
  {
    path: '/products',
    name: 'PlpPage',
    component: PlpPage,
    meta: {
      breadCrumb: [{ text: 'Home', to: { name: 'Home' } }, { text: 'Products' }]
    }
  },
  {
    path: '/products/:id',
    name: 'PdpPage',
    component: PdpPage,
    meta: {
      breadCrumb({ params }) {
        return [
          { text: 'Home', to: { name: 'Home' } },
          { text: 'Products', to: { name: 'PlpPage' } },
          {
            params: {
              paramToPdpPage: params.id
            }
          }
        ];
      }
    }
  },
  {
    path: '/cart',
    name: 'ShoppingCartPage',
    component: ShoppingCartPage,
    meta: {
      breadCrumb: [{ text: 'Home', to: { name: 'Home' } }, { text: 'Cart' }]
    }
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: ProfilePage,
    meta: {
      breadCrumb: [{ text: 'Home', to: { name: 'Home' } }, { text: 'Profile' }]
    }
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
