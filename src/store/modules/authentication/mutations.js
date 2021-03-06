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
    state.currentUserInfo = payload;
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
    state.currentUserInfo = payload;
  },

  [types.LOGIN_USER_FAIL](state, payload) {
    state.isError = true;
    state.isLoading = false;
    state.currentUserInfo = null;
    state.errorMessageLogin = payload;
  },

  [types.SET_USER_INFO_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
  },

  [types.SET_USER_INFO_SUCCESS](state, payload) {
    state.isError = false;
    state.isLoading = false;
    state.currentUserInfo = payload;
  },

  [types.SET_USER_INFO_FAIL](state) {
    state.isError = true;
    state.isLoading = false;
    state.currentUserInfo = null;
  },

  [types.CLEAR_CURRENT_USER](state) {
    state.currentUserInfo = null;
  },

  [types.SET_USER_UPDATE_INFO_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
  },

  [types.SET_USER_UPDATE_INFO_SUCCESS](state, payload) {
    state.isError = false;
    state.isLoading = false;
    state.currentUserInfo = payload;
  },

  [types.SET_USER_UPDATE_INFO_FAIL](state) {
    state.isError = true;
    state.isLoading = false;
    state.currentUserInfo = null;
  }
};

export default mutations;
