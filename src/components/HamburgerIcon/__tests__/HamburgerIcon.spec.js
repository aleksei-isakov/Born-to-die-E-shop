import { shallowMount, createLocalVue } from '@vue/test-utils';
import HamburgerIcon from '../../HamburgerIcon/HamburgerIcon.vue';

describe('HamburgerIcon.vue', () => {
  let wrapper = shallowMount(HamburgerIcon);

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
