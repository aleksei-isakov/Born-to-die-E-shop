import { shallowMount } from '@vue/test-utils';
import HomePage from '../HomePage.vue';

describe('HomePage', () => {
  it('renders a valid snapshot', () => {
    const wrapper = shallowMount(HomePage);

    expect(wrapper).toMatchSnapshot();
  });
});
