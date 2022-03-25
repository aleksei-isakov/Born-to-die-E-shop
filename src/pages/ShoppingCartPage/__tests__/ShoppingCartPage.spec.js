import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ShoppingCartPage from '../ShoppingCartPage.vue';
import ShoppingCartList from '@/components/ShoppingCartList/ShoppingCartList.vue';
import EmptyCartButton from '@/components/EmptyCartButton/EmptyCartButton.vue';
import EmptyCartPopup from '@/components/EmptyCartPopup/EmptyCartPopup.vue';

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

  wrapper = shallowMount(ShoppingCartPage, {
    stubs: {
      ShoppingCartList,
      EmptyCartButton,
      EmptyCartPopup
    },
    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ShoppingCartPage', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain shopping-Cart-list', () => {
    expect(wrapper.find('.shopping-Cart-list').exists());
  });

  it('should be a Vue instance ', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
