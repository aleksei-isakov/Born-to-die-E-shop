import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import ProfilePageMenuMobile from '@/components/ProfilePageMenu/ProfilePageMenuMobile/ProfilePageMenuMobile';
import { BaseButtonRouter } from '@/base_components';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(ProfilePageMenuMobile, {
    stubs: {
      BaseButtonRouter,
      RouterLink: RouterLinkStub
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProfilePageMenuMobile', () => {
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain bottombar', () => {
    expect(wrapper.find('.profile-page-menu__bottombar').exists()).toBe(true);
  });

  it('should contain elements inside the bottombar', () => {
    expect(wrapper.find('.bottombar-menu-item').exists()).toBe(true);
  });

  it('should contain BaseButtonRouters', () => {
    expect(wrapper.findComponent(BaseButtonRouter).exists()).toBe(true);
  });
});
