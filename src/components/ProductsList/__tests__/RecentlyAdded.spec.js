import { mount } from '@vue/test-utils';
import RecentlyAdded from '@/components/ProductsList/RecentlyAdded.vue';

describe('RecentlyAdded', () => {
  it('renders correctly', () => {
    const wrapper = mount(RecentlyAdded);

    expect(wrapper.element).toMatchSnapshot();
  });
});
