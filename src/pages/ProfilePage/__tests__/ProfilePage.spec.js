import { shallowMount } from '@vue/test-utils';
import ProfilePageMenu from '@/components/ProfilePageMenu/ProfilePageMenu.vue';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';

let wrapper;
let store;
let actions;
let getters;
const localVue = createLocalVue();
const $route = {
  name: 'name'
};

localVue.use(Vuex);

beforeEach(() => {
  wrapper = shallowMount(ProfilePage, {
    stubs: {
      ProfilePageMenu: ProfilePageMenu
    },
    mocks: {
      $route
    },

    store,
    localVue
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
