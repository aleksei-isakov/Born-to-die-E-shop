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
  it('icon is clickable', () => {
    wrapper.trigger('click');
    expect(wrapper.vm.isActive).toBe(true);
  });

  it('should have "active" class after user clicked', async () => {
    await wrapper.trigger('click');
    expect(wrapper.classes()).toContain('active');
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
