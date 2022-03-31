import { shallowMount } from '@vue/test-utils';
import ProfilePageMenu from '@/components/ProfilePageMenu/ProfilePageMenu.vue';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(ProfilePage, {
    stubs: {
      ProfilePageMenu: ProfilePageMenu
    }
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('ProfilePage', () => {
  it('should render profile page for the user', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should contain desktop and mobile versions for the user', () => {
    expect(wrapper.findComponent(ProfilePageMenu).exists()).toBe(true);
  });
});
