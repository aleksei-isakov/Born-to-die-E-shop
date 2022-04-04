import { shallowMount } from '@vue/test-utils';
import siteHeader from '../siteHeader.vue';
import Vue from 'vue';
import Vuetify from 'vuetify';
Vue.use(Vuetify);
let wrapper;

beforeEach(() => {
  wrapper = shallowMount(siteHeader);
  expect(wrapper.is(siteHeader)).toBeTruthy();
});

afterEach(() => {
  wrapper.destroy();
});

describe('Header', () => {
  test('should render header wrapper', () => {
    expect(wrapper.find('.header__wrapper').exists()).toBe(true);
  });

  test('should render header logo', () => {
    expect(wrapper.find('.header__logo').exists()).toBe(true);
  });

  test('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
