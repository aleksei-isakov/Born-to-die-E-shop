import { shallowMount } from '@vue/test-utils';
import siteFooter from '../siteFooter.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(siteFooter, {});
  expect(wrapper.is(siteFooter)).toBeTruthy();
});

afterEach(() => {
  wrapper.destroy();
});

describe('Footer', () => {
  test("has 'footer-wrapper' class", () => {
    expect(wrapper.find('.footer-wrapper').exists()).toBe(true);
  });
});

describe('Footer', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('Footer', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
