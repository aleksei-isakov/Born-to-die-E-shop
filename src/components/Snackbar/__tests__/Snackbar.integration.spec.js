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
  let store, vuetify, actions, wrapper;
  const mockState = {
    isError: true
  };

  beforeEach(() => {
    vuetify = new Vuetify();

    actions = {
      closeSnackbar: jest.spyOn(globalmessagestate.actions, 'closeSnackbar')
    };

    store = new Vuex.Store({
      modules: {
        globalmessagestate: {
          namespaced: true,
          state: mockState,
          getters: globalmessagestate.getters,
          actions,
          mutations: globalmessagestate.mutations
        }
      }
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  test('snackbar should close when "OK" button is clicked', () => {
    wrapper = mount(Snackbar, {
      store,
      localVue,
      vuetify
    });
    const button = wrapper.find('.v-btn');

    button.trigger('click');
    expect(actions.closeSnackbar).toHaveBeenCalledTimes(1);
    expect(mockState.isError).toEqual(false);
  });
});
