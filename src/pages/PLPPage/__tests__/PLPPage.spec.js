import { shallowMount } from '@vue/test-utils';
import PLPPage from '../PLPPage.vue';

describe('PLPPage', () => {
  it('renders a valid snapshot', () => {
    const wrapper = shallowMount(PLPPage);

    expect(wrapper).toMatchSnapshot();
  });
});
