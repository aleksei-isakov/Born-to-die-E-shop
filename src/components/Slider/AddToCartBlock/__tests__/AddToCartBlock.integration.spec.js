import { mount, createLocalVue } from '@vue/test-utils';
import AddToCartBlock from '../AddToCartBlock';
import Vuex from 'vuex';
import ShoppingCartModule from '@/store/modules/shoppingcart';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('AddToCartBlock', () => {
  let profile = {};
  let isSignIn = false;
  let store;
  let rating;
  let actions;
  let wrapper;
  let initState = {
    productsInCart: []
  };
  const mockProductInfo = {
    id: 1
  };
  const pdpGetters = {
    productInfo: () => mockProductInfo
  };

  beforeEach(() => {
    actions = {
      addToCart: jest.spyOn(ShoppingCartModule.actions, 'addToCart')
    };
    store = new Vuex.Store({
      modules: {
        ShoppingCartModule: {
          namespaced: true,
          state: initState,
          actions,
          mutations: ShoppingCartModule.mutations
        },
        PdpPageModule: {
          namespaced: true,
          getters: pdpGetters
        }
      }
    });
  });

  test('should add the product to cart on click', () => {
    wrapper = mount(AddToCartBlock, {
      store,
      localVue,
      propsData: { profile, isSignIn, rating }
    });
    const button = wrapper.find('.add-to-card__button');

    button.trigger('click');
    expect(actions.addToCart).toHaveBeenCalledTimes(1);
    expect(initState.productsInCart).toEqual([mockProductInfo]);
  });
});
