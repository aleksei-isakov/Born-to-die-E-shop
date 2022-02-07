import { mount } from '@vue/test-utils';
import RecentlyAdded from '@/components/ProductsList/RecentlyAdded.vue';

describe('RecentlyAdded', () => {
  it('renders correctly', () => {
    const wrapper = mount(RecentlyAdded, {
      propsData: {
        text: 'Recently added'
      }
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
