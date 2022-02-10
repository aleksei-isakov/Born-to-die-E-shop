import { shallowMount, createLocalVue } from '@vue/test-utils';
import Footer from '../../Footer/Footer.vue';

describe('Footer.vue', () => {
  let wrapper = shallowMount(Footer);

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
