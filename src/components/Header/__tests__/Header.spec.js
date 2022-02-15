import { shallowMount } from '@vue/test-utils';
import Header from '../../Header/Header.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Header, {});
  expect(wrapper.is(Header)).toBeTruthy();
});

afterEach(() => {
  wrapper.destroy();
});

describe('Header', () => {
  test("has 'header-wrapper' class", () => {
    expect(wrapper.contains('.header-wrapper')).toBe(true);
  });
});

describe('Header', () => {
  test("has 'header-logo__icon' class", () => {
    expect(wrapper.contains('.header-logo__icon')).toBe(true);
  });
});

describe('Header', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('Header.vue', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
