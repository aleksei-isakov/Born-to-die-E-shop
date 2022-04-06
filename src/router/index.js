import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';
import PlpPage from '../pages/PlpPage/PlpPage.vue';
import PdpPage from '@/pages/PdpPage/PdpPage';
import ShoppingCartPage from '@/pages/ShoppingCartPage/ShoppingCartPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import MyProfileInfo from '@/components/MyProfileInfo/MyProfileInfo.vue';
import AddressBookPage from '@/pages/AddressBookPage/AddressBookPage.vue';
import { PROFILE_NAME, ADDRESS_BOOK_NAME } from '@/constants.js';

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
    children: [
      {
        path: '/profile',
        name: PROFILE_NAME,
        component: MyProfileInfo,
        meta: {
          breadCrumb: [
            { text: 'Home', to: { name: 'Home' } },
            { text: 'Profile' }
          ]
        }
      },

      {
        path: 'address-book',
        name: 'Address book',
        component: AddressBookPage,
        meta: {
          breadCrumb: [
            { text: 'Home', to: { name: 'Home' } },
            { text: 'Profile', to: { name: 'Profile' } },
            { text: 'Address book' }
          ]
        }
      }
    ]
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (
    !localStorage.getItem('currentUserId') &&
    (to.name === PROFILE_NAME || to.name === ADDRESS_BOOK_NAME)
  ) {
    next('/');
  } else {
    next();
  }
});

export default router;
