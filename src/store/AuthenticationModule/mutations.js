import * as types from './mutationsTypes';

const mutations = {
  [types.REGISTER_USER_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
    state.regeneratedUser = null;
  },
  [types.REGISTER_USER_SUCCESS](state, payload) {
    state.isError = false;
    state.isLoading = false;
    state.regeneratedUser = payload;
    localStorage.setItem('accessToken', payload.accessToken);
  },
  [types.REGISTER_USER_FAIL](state) {
    state.isError = true;
    state.isLoading = false;
    state.regeneratedUser = null;
  },

  [types.LOGIN_USER_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
    state.regeneratedUser = null;
  },
  [types.LOGIN_USER_SUCCESS](state, payload) {
    state.isError = false;
    state.isLoading = false;
    state.currentUser = payload;
    localStorage.setItem('accessToken', payload.accessToken);
  },
  [types.LOGIN_USER_FAIL](state) {
    state.isError = true;
    state.isLoading = false;
    state.regeneratedUser = null;
  }
};

export default mutations;
