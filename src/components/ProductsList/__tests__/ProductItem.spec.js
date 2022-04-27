import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ProductItem from '@/components/ProductsList/ProductItem.vue';
import defaultImage from '@/assets/defaultImage.jpg';
import productsMock from './productsMock.json';
import formatCurrency from '@/utils/formatCurrency';

let wrapper;
let store;
let getters;
const shoppingCartGetter = {
  productsInCart: () => productsMock
};
const localVue = createLocalVue();

localVue.use(Vuex);
localVue.filter('currency', formatCurrency);

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      ShoppingCartModule: {
        namespaced: true,
        getters: shoppingCartGetter
      },
      PdpPageModule: {
        namespaced: true,
        getters: {
          productInfo: () => {}
        }
      },
      AuthenticationModule: {
        namespaced: true,
        getters: {
          isConsumer: () => false
        }
      },
      WishlistModule: {
        namespaced: true,
        getters: {
          productsInWishlist: () => []
        }
      }
    }
  });

  wrapper = shallowMount(ProductItem, {
    propsData: {
      product: {
        name: 'Soft Soap',
        category: {
          name: 'HOME'
        },
        createdAt: '2022-02-02T10:25:52.266Z',
        updatedAt: '2022-02-02T10:25:52.266Z',
        image: null,
        price: 800.7263828,
        discountPercentage: 0,
        priceWithDiscount: 800.7263828,
        id: '1'
      },
      id: '0',
      image: '',
      price: 10,
      discountPercentage: 0,
      priceWithDiscount: 10,
      created: '',
      updated: '',
      title: 'title',
      category: 'Category',
      rating: 0,
      isHorizontal: false
    },
    stubs: ['router-link'],
    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});
describe('ProductItem', () => {
  it('should show default image if does not get image in props', () => {
    const localThis = { image: null };

    expect(ProductItem.computed.getImage.call(localThis)).toBe(defaultImage);
  });

  it('shoult match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
