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
    checkedProductsInCart: () => [],
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
  it('displays the correct version of the checkout page for the user', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain the list of products choosed by the user', () => {
    expect(wrapper.find('.shopping-cart-list').exists());
  });

  it('should be a Vue instance ', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
