import { shallowMount, createLocalVue } from '@vue/test-utils';
import SideMenuItems from '@/components/SideMenuSection/SideMenuItems';
import SideMenuItem from '@/components/SideMenuSection/SideMenuItem';

describe('SideMenuItems.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(SideMenuItems, {
      localVue,
      stubs: {
        SideMenuItem: SideMenuItem
      }
    });
  });

  it('should render items in side menu correct', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
