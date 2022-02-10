import { shallowMount } from '@vue/test-utils';
import HamburgerIcon from '../../HamburgerIcon/HamburgerIcon.vue';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(HamburgerIcon, {
    data: function () {
      return {
        isActive: false
      };
    }
  });
  expect(wrapper.is(HamburgerIcon)).toBeTruthy();
  expect(wrapper.vm.isActive).toBe(false);
});

afterEach(() => {
  wrapper.destroy();
});

describe('HamburgerIcon', () => {
  test('click', () => {
    wrapper.trigger('click');
    expect(wrapper.vm.isActive).toBe(true);
  });
});

describe('HamburgerIcon', () => {
  test("has 'bar1' class", () => {
    expect(wrapper.contains('.bar1')).toBe(true);
  });
});

describe('HamburgerIcon', () => {
  test("has 'bar2' class", () => {
    expect(wrapper.contains('.bar2')).toBe(true);
  });
});

describe('HamburgerIcon', () => {
  test("has 'bar3' class", () => {
    expect(wrapper.contains('.bar3')).toBe(true);
  });
});

describe('HamburgerIcon', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});

describe('HamburgerIcon.vue', () => {
  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
