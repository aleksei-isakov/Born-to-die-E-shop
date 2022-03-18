import { shallowMount, createLocalVue } from '@vue/test-utils';
import SideMenuItems from '@/components/SideMenuSection/SideMenuItems';

describe('SideMenuItems.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(SideMenuItems, {
      localVue
    });
  });

  it('should render items in side menu correct', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
