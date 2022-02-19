import * as types from './mutationsTypes';

const mutations = {
  [types.AUTH_USER_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
    state.currentUserInfo = null;
    state.errorMessage = null;
  },
  [types.AUTH_USER_SUCCESS](state, payload) {
    state.isError = false;
    state.isLoading = false;
    state.currentUserInfo = payload?.user;
    localStorage.setItem('accessToken', payload?.accessToken);
    localStorage.setItem('currentUserId', payload?.user?.id);
  },
  [types.AUTH_USER_FAIL](state, payload) {
    state.isError = true;
    state.isLoading = false;
    state.currentUserInfo = null;

    if (payload) {
      state.errorMessage = payload;
    }
  }
};

export default mutations;
