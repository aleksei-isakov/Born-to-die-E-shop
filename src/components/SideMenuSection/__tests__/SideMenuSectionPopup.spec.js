import { shallowMount, createLocalVue } from '@vue/test-utils';
import SideMenuItems from '@/components/SideMenuSection/SideMenuItems';
import SideMenuPopup from '@/components/SideMenuSection/SideMenuPopup';

describe('SideMenuItems.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(SideMenuPopup, {
      localVue,
      stubs: {
        SideMenuItems: SideMenuItems
      }
    });
  });

  it('should render popup correct', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
