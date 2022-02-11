import { shallowMount, createLocalVue } from '@vue/test-utils';
import Header from '../../Header/Header.vue';

describe('Header.vue', () => {
  let wrapper = shallowMount(Header);

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
