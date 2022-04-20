import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';
import PlpPage from '../pages/PlpPage/PlpPage.vue';
import PdpPage from '@/pages/PdpPage/PdpPage';
import ShoppingCartPage from '@/pages/ShoppingCartPage/ShoppingCartPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import MyProfileInfo from '@/components/MyProfileInfo/MyProfileInfo.vue';
import AddressBookPage from '@/pages/AddressBookPage/AddressBookPage.vue';
import WishlistPage from '@/pages/WishlistPage/WishlistPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage.vue';
import OrdersPage from '@/pages/OrdersPage/OrdersPage';

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
        name: 'Profile',
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
      },

      {
        path: 'wishlist',
        name: 'Wishlist',
        component: WishlistPage,
        meta: {
          breadCrumb: [
            { text: 'Home', to: { name: 'Home' } },
            { text: 'Profile', to: { name: 'Profile' } },
            { text: 'Wishlist' }
          ]
        }
      },

      {
        path: 'orders',
        name: 'Orders',
        component: OrdersPage,
        meta: {
          breadCrumb: [
            { text: 'Home', to: { name: 'Home' } },
            { text: 'Profile', to: { name: 'Profile' } },
            { text: 'Orders' }
          ]
        }
      }
    ]
  },
  {
    path: '/*',
    name: 'NotFoundPage',
    component: NotFoundPage
  }
];
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('currentUserId') && to.path.includes('profile')) {
    next({
      name: 'NotFoundPage',
      params: {
        pathMatch: ''
      }
    });
  } else {
    next();
  }
});

export default router;
