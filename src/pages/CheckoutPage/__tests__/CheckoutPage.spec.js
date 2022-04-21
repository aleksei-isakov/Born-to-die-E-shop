import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import CheckoutPage from '../CheckoutPage.vue';
import ShoppingCartList from '@/components/ShoppingCartList/ShoppingCartList.vue';

let wrapper;
let store;
let actions;
let getters;
const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  getters = {
    productsInCart: () => [],
    totalPrice: () => 100
  };

  store = new Vuex.Store({
    modules: {
      ShoppingCartModule: {
        actions,
        getters,
        namespaced: true
      }
    }
  });

  wrapper = shallowMount(CheckoutPage, {
    stubs: {
      ShoppingCartList
    },
    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('CheckoutPage', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain shopping-cart-list', () => {
    expect(wrapper.find('.shopping-cart-list').exists());
  });

  it('should be a Vue instance ', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
