import Vue from 'vue';
import Vuetify from 'vuetify';
import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import ShoppingCartItem from '@/components/ShoppingCartItem/ShoppingCartItem';
import defaultImage from '@/assets/defaultImage.jpg';
import Vuex from 'vuex';
import formatCurrency from '@/utils/formatCurrency';
Vue.use(Vuetify);

describe('ShoppingCartItem', () => {
  let wrapper;
  const name = 'name';
  const price = 35;
  const discountPercentage = 0;
  const priceWithDiscount = 35;
  const quantity = 1;
  const id = '0';
  const isChecked = true;
  let vuetify = new Vuetify();
  const imageList = [
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480',
    'http://placeimg.com/640/480'
  ];

  Vue.filter('currency', formatCurrency);

  beforeEach(() => {
    wrapper = mount(ShoppingCartItem, {
      vuetify,
      propsData: {
        images: imageList,
        id,
        name,
        quantity,
        price,
        isChecked,
        priceWithDiscount: priceWithDiscount,
        discountPercentage: discountPercentage
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('should return correct props', () => {
    expect(wrapper.props().name).toBe(name);
    expect(wrapper.props().price).toBe(price);
    expect(wrapper.props().quantity).toBe(quantity);
    expect(wrapper.props().images).toBe(imageList);
    expect(wrapper.props().id).toBe(id);
    expect(wrapper.props().isChecked).toBe(isChecked);
  });

  test('Should take the first image if images array is not empty', () => {
    const localThis = { images: imageList };

    expect(ShoppingCartItem.computed.getImage.call(localThis)).toBe(
      imageList[0]
    );
  });

  test('Should get default image when no images in the props', () => {
    const localThis = { images: null };

    expect(ShoppingCartItem.computed.getImage.call(localThis)).toBe(
      defaultImage
    );
  });

  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Checkbox actions', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      checkCartItem: jest.fn(),
      uncheckCartItem: jest.fn()
    };

    store = new Vuex.Store({
      modules: {
        ShoppingCartModule: {
          namespaced: true,
          state: {
            productsInCart: []
          },
          actions
        }
      }
    });
  });

  it('dispatches "toggleCartItemSelection" when checkbox is checked', () => {
    const wrapper = shallowMount(ShoppingCartItem, {
      store,
      localVue,
      propsData: {
        id: '1',
        price: 1,
        quantity: 1,
        name: 'name',
        isChecked: true,
        discountPercentage: 0,
        priceWithDiscount: 1
      }
    });

    wrapper.vm.onChangeToggleCartItemSelection(true);
    expect(actions.checkCartItem).toHaveBeenCalled();

    wrapper.vm.onChangeToggleCartItemSelection(false);
    expect(actions.uncheckCartItem).toHaveBeenCalled();
  });

  it('returns discount percentage', () => {
    const wrapper = shallowMount(ShoppingCartItem, {
      store,
      localVue,
      propsData: {
        id: '1',
        price: 100,
        quantity: 1,
        name: 'name',
        isChecked: true,
        discountPercentage: 50,
        priceWithDiscount: 50
      }
    });

    expect(wrapper.vm.getDiscountPercentage).toEqual('50%');
  });
});
