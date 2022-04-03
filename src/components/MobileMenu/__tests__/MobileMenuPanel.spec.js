import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils';
import MobileMenuPanel from '../MobileMenuPanel';
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

const vuetify = new Vuetify();
let wrapper;
let store;
let getters;

describe('MobileMenuPanel', () => {
  beforeEach(() => {
    const localVue = createLocalVue();

    localVue.use(Vuex);

    const mockUserInfo = {
      accessToken: 'token',
      user: {
        id: '123'
      }
    };

    getters = {
      currentUserInfo: () => mockUserInfo
    };

    store = new Vuex.Store({
      modules: {
        AuthenticationModule: {
          namespaced: true,
          getters
        }
      }
    });

    wrapper = mount(MobileMenuPanel, {
      store,
      localVue,
      vuetify,
      propsData: {
        isVisible: false
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should show profile link if user is logged in', () => {
    expect(wrapper.find('a:last-child').props().to).toBe('/profile');
  });

  it('should emit event when the panel closes', () => {
    wrapper.vm.onClickChangeVisibility(false);
    expect(wrapper.emitted('change-visibility')).toBeTruthy();
    expect(wrapper.emitted('change-visibility')).toEqual([[false]]);
  });

  it('should not emit event when the panel opens', () => {
    wrapper.vm.onClickChangeVisibility(true);
    expect(wrapper.emitted('change-visibility')).toBeFalsy();
  });

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  it('should match a snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});

describe('MobileMenuPanel', () => {
  beforeEach(() => {
    const localVue = createLocalVue();

    localVue.use(Vuex);

    getters = {
      currentUserInfo: () => null
    };

    store = new Vuex.Store({
      modules: {
        AuthenticationModule: {
          namespaced: true,
          getters
        }
      }
    });

    wrapper = mount(MobileMenuPanel, {
      store,
      localVue,
      vuetify,
      propsData: {
        isVisible: false
      },
      stubs: {
        RouterLink: RouterLinkStub
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should not show profile link if user is not logged in', () => {
    expect(wrapper.find('a:last-child').props().to).not.toBe('/profile');
  });
});
