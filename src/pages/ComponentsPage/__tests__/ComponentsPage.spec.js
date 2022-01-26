import { shallowMount } from '@vue/test-utils';
import ComponentsPage from '../ComponentsPage.vue';

describe('ComponentsPage', () => {
  it('renders a valid snapshot', () => {
    const wrapper = shallowMount(ComponentsPage);

    expect(wrapper).toMatchSnapshot();
  });
});
