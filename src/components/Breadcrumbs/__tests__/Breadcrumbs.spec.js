import { mount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import ShoppingCartPage from '@/pages/ShoppingCartPage/ShoppingCartPage';
import HomePage from '@/pages/HomePage/HomePage';
Vue.use(Vuetify);

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
    path: '/cart',
    name: 'ShoppingCartPage',
    component: ShoppingCartPage,
    meta: {
      breadCrumb: [{ text: 'Home', to: { name: 'Home' } }, { text: 'Cart' }]
    }
  }
];
const localVue = createLocalVue();

localVue.use(VueRouter);
const router = new VueRouter({ routes });
let wrapper;

beforeEach(() => {
  wrapper = mount(Breadcrumbs, {
    localVue,
    router
  });

  router.push('/cart').catch((error) => {
    if (
      error.name !== 'NavigationDuplicated' &&
      !error.message.includes(
        'Avoided redundant navigation to current location'
      )
    ) {
      console.log(error);
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Breadcrumbs', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('return to home page', () => {
    wrapper.find('a').trigger('click');
    expect(wrapper.vm.$route.path).toBe('/');
  });

  it('should contain breadcrumbs container', () => {
    expect(wrapper.find('.breadcrumbs__wrapper').exists()).toBe(true);
  });
});
