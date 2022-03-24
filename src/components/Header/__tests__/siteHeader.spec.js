import { shallowMount } from '@vue/test-utils';
import siteHeader from '../siteHeader.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(siteHeader, {});
  expect(wrapper.is(siteHeader)).toBeTruthy();
});

afterEach(() => {
  wrapper.destroy();
});

describe('Header', () => {
  test("has 'header-wrapper' class", () => {
    expect(wrapper.find('.header-wrapper').exists()).toBe(true);
  });
});

describe('Header', () => {
  test("has 'header-logo__icon' class", () => {
    expect(wrapper.find('.header-logo__icon').exists()).toBe(true);
  });
});

describe('Header', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('siteHeader.vue', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
