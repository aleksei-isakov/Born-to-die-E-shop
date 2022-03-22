import Vue from 'vue';
import Vuex from 'vuex';
import { createLocalVue, mount } from '@vue/test-utils';
import Snackbar from '../Snackbar';
import Vuetify from 'vuetify';
import globalmessagestate from '@/store/modules/globalmessagestate';

Vue.use(Vuetify);
const localVue = createLocalVue();

localVue.use(Vuex);

describe('Snackbar', () => {
  let store, vuetify, wrapper;
  const mockState = {
    errorMessage: "Hi, i'm error!"
  };

  beforeEach(() => {
    vuetify = new Vuetify();

    store = new Vuex.Store({
      modules: {
        globalmessagestate: {
          namespaced: true,
          state: mockState,
          getters: globalmessagestate.getters,
          actions: globalmessagestate.actions,
          mutations: globalmessagestate.mutations
        }
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('component should render correctly', () => {
    wrapper = mount(Snackbar, {
      store,
      localVue,
      vuetify
    });
    expect(mockState.errorMessage).toEqual("Hi, i'm error!"),
      expect(wrapper).toMatchSnapshot();
  });
});
