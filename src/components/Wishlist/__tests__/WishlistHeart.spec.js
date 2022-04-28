import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import WishlistHeart from '../WishlistHeart';
import WishlistHeartIcon from '../WishlistHeartIcon';
import WishlistModule from '@/store/modules/wishlist';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('WishlistHeart', () => {
  let store;
  let actions;
  let getters;
  let wrapper;
  let initState = {
    productsInWishlist: []
  };
  const mockProductInfo = {
    id: 1
  };

  beforeEach(() => {
    actions = {
      addToWishlist: jest.spyOn(WishlistModule.actions, 'addToWishlist'),
      updateWishlist: jest.spyOn(WishlistModule.actions, 'updateWishlist')
    };

    getters = {
      productsInWishlist: () => [],
      productInfo: () => mockProductInfo,
      isConsumer: () => true
    };

    store = new Vuex.Store({
      modules: {
        WishlistModule: {
          namespaced: true,
          state: initState,
          actions,
          getters,
          mutations: WishlistModule.mutations
        },
        PdpPageModule: {
          namespaced: true,
          getters
        },
        AuthenticationModule: {
          namespaced: true,
          getters
        }
      }
    });

    wrapper = shallowMount(WishlistHeart, {
      store,
      localVue,
      stubs: { WishlistHeartIcon }
    });
  });

  it('should render wishlist heart correct', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should add the product to wishlist on click', () => {
    const button = wrapper.find('.wishlist-heart');
    const addToWishlist = actions.addToWishlist;

    expect(initState.productsInWishlist).toEqual([]);
    expect(wrapper.vm.isProductInWishlist).toBeFalsy();

    button.trigger('click');

    expect(addToWishlist).toHaveBeenCalled();
  });
});
