import { shallowMount } from '@vue/test-utils';
import PlpPage from '../PlpPage.vue';

describe('PlpPage', () => {
  it('renders a valid snapshot', () => {
    const wrapper = shallowMount(PlpPage);

    expect(wrapper).toMatchSnapshot();
  });
});
