import * as types from './mutationsTypes';

const mutations = {
  [types.REGISTER_USER_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
    state.currentUserInfo = null;
    state.errorMessage = null;
  },
  [types.REGISTER_USER_SUCCESS](state, payload) {
    state.isError = false;
    state.isLoading = false;
    state.currentUserInfo = payload?.user;
    localStorage.setItem('accessToken', payload?.accessToken);
    localStorage.setItem('currentUserId', payload?.user?.id);
  },
  [types.REGISTER_USER_FAIL](state, payload) {
    state.isError = true;
    state.isLoading = false;
    state.currentUserInfo = null;
    state.errorMessageRegister = payload;
  },

  [types.LOGIN_USER_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
    state.currentUserInfo = null;
    state.errorMessage = null;
  },
  [types.LOGIN_USER_SUCCESS](state, payload) {
    state.isError = false;
    state.isLoading = false;
    state.currentUserInfo = payload?.user;
    localStorage.setItem('accessToken', payload?.accessToken);
    localStorage.setItem('currentUserId', payload?.user?.id);
  },
  [types.LOGIN_USER_FAIL](state, payload) {
    state.isError = true;
    state.isLoading = false;
    state.currentUserInfo = null;
    state.errorMessageLogin = payload;
  }
};

export default mutations;
