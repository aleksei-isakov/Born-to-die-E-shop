import { mount, createLocalVue } from '@vue/test-utils';
import ShoppingCartGroup from '@/components/ShoppingCartGroup/ShoppingCartGroup';
import { mockProductsInCartGroupedBySeller } from '@/mocks';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

const groupWithAllCheckedItems = mockProductsInCartGroupedBySeller[0];
const groupWithPartlyCheckedItems = mockProductsInCartGroupedBySeller[1];

describe('ShoppingCartGroup', () => {
  let wrapper;
  let groupCheckbox;
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
          actions
        }
      }
    });

    wrapper = mount(ShoppingCartGroup, {
      store,
      localVue,
      propsData: {
        seller: groupWithAllCheckedItems.seller,
        products: groupWithAllCheckedItems.products
      }
    });
    groupCheckbox = wrapper.find('.group__checkbox');
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test('should be checked if all items inside it are checked', () => {
    expect(wrapper.find('.group__checkbox').element.checked).toBeTruthy();
  });

  test('should call action "uncheckCartItem" for all checked products in group after user unchecked group checkbox', async () => {
    await groupCheckbox.setChecked(false);
    expect(groupCheckbox.element.checked).toBeFalsy();

    const productsQuantity = groupWithAllCheckedItems.products.length;

    expect(actions.uncheckCartItem).toHaveBeenCalledTimes(productsQuantity);
  });

  test('match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ShoppingCartGroup', () => {
  let wrapper;
  let groupCheckbox;
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
          actions
        }
      }
    });

    wrapper = mount(ShoppingCartGroup, {
      store,
      localVue,
      propsData: {
        seller: groupWithPartlyCheckedItems.seller,
        products: groupWithPartlyCheckedItems.products
      }
    });
    groupCheckbox = wrapper.find('.group__checkbox');
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('should not be checked if not all items inside it are checked', () => {
    expect(wrapper.find('.group__checkbox').element.checked).toBeFalsy();
  });

  test('should call action "checkCartItem" for all unchecked products in group after user checked group checkbox', async () => {
    await groupCheckbox.setChecked(true);
    expect(groupCheckbox.element.checked).toBeTruthy();

    const productsQuantity = groupWithPartlyCheckedItems.products.filter(
      ({ checked }) => !checked
    ).length;

    expect(actions.checkCartItem).toHaveBeenCalledTimes(productsQuantity);
  });
});
