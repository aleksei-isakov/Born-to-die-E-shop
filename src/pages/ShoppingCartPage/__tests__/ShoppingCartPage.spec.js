import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';
import ShoppingCartPage from '../ShoppingCartPage.vue';
import ShoppingCardList from '@/components/ShoppingCardList/ShoppingCardList.vue';
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
    productsInCart: () => []
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
      ShoppingCardList: ShoppingCardList,
      EmptyCartButton: EmptyCartButton,
      EmptyCartPopup: EmptyCartPopup
    },
    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

const getproductsInCart = () => wrapper.find('.shopping-card-list');

describe('ShoppingCartPage', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain shopping-card-list', () => {
    expect(getproductsInCart().exists());
  });

  it('should be a Vue instance ', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
