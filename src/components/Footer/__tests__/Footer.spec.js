import { shallowMount, createLocalVue } from '@vue/test-utils';
import Footer from '../../Footer/Footer.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(Footer, {});
  expect(wrapper.is(Footer)).toBeTruthy();
});

afterEach(() => {
  wrapper.destroy();
});

describe('Footer', () => {
  test("has 'footer-wrapper' class", () => {
    expect(wrapper.contains('.footer-wrapper')).toBe(true);
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
