import { shallowMount, createLocalVue } from '@vue/test-utils';
import SideMenuItems from '@/components/SideMenuSection/SideMenuItems';
import SideMenuPopup from '@/components/SideMenuSection/SideMenuPopup';

describe('SideMenuItems.vue', () => {
  let wrapper;

  beforeEach(() => {
    const localVue = createLocalVue();

    wrapper = shallowMount(SideMenuPopup, {
      localVue
    });
  });

  it('should render popup for user when it clicked', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
