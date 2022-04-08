import { shallowMount } from '@vue/test-utils';
import ProfilePageMenuDesktop from '@/components/ProfilePageMenu/ProfilePageMenuDesktop/ProfilePageMenuDesktop';
import SideMenuItem from '@/components/SideMenuSection/SideMenuItem';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(ProfilePageMenuDesktop, {
    stubs: {
      SideMenuItem
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProfilePageMenuDesktop', () => {
  it('renders the desktop version of ProfilePage', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain sidebar', () => {
    expect(wrapper.findComponent(SideMenuItem).exists()).toBe(true);
  });
});
