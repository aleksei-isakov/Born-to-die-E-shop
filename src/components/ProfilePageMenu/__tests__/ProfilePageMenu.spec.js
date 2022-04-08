import { shallowMount } from '@vue/test-utils';
import ProfilePageMenu from '@/components/ProfilePageMenu/ProfilePageMenu.vue';
import ProfilePageMenuMobile from '@/components/ProfilePageMenu/ProfilePageMenuMobile/ProfilePageMenuMobile';
import ProfilePageMenuDesktop from '@/components/ProfilePageMenu/ProfilePageMenuDesktop/ProfilePageMenuDesktop';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(ProfilePageMenu, {
    stubs: {
      ProfilePageMenuMobile: ProfilePageMenuMobile,
      ProfilePageMenuDesktop: ProfilePageMenuDesktop
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProfilePageMenu', () => {
  it('should match snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should contain desktop version of menu', () => {
    expect(wrapper.findComponent(ProfilePageMenuDesktop).exists()).toBe(true);
  });

  it('should contain mobile version of menu', () => {
    expect(wrapper.findComponent(ProfilePageMenuMobile).exists()).toBe(true);
  });
});
