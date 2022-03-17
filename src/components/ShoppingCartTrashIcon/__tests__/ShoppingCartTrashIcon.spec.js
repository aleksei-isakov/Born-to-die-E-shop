import { createLocalVue, shallowMount } from '@vue/test-utils';
import ShoppingCartTrashIcon from '@/components/ShoppingCartTrashIcon/ShoppingCartTrashIcon';
import Vuex from 'vuex';
import ShoppingCartModule from '@/store/modules/shoppingcart';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ShoppingCartTrashIcon', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        ShoppingCartModule: {
          namespaced: true,
          state: ShoppingCartModule.state,
          getters: ShoppingCartModule.getters,
          actions: ShoppingCartModule.actions
        }
      }
    });
  });
  test('should import BaseCustomIcon', () => {
    wrapper = shallowMount(ShoppingCartTrashIcon, {
      localVue,
      store
    });
    expect(wrapper.find('BaseCustomIcon')).toBeTruthy();
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
