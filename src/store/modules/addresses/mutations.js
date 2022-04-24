import * as types from './mutationsTypes';

const mutations = {
  [types.SET_ADDRESSES_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
  },

  [types.SET_ADDRESSES_SUCCESS](state, payload) {
    state.isError = false;
    state.isLoading = false;
    state.addresses = payload;
  },

  [types.SET_ADDRESSES_FAIL](state) {
    state.isError = true;
    state.isLoading = false;
    state.addresses = null;
  },

  [types.ADD_NEW_ADDRESS_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
  },

  [types.ADD_NEW_ADDRESS_SUCCESS](state, payload) {
    state.isError = false;
    state.isLoading = false;
    state.addresses.push(payload);
  },

  [types.ADD_NEW_ADDRESS_FAIL](state) {
    state.isError = true;
    state.isLoading = false;
    state.addresses = null;
  },

  [types.UPDATE_ADDRESS_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
  },

  [types.UPDATE_ADDRESS_SUCCESS](state, payload) {
    state.isError = false;
    state.isLoading = false;
    state.addresses = state.addresses.map((address) =>
      address.id === payload.id ? payload : address
    );
  },

  [types.UPDATE_ADDRESS_FAIL](state) {
    state.isError = true;
    state.isLoading = false;
    state.addresses = null;
  },

  [types.DELETE_ADDRESS_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
  },

  [types.DELETE_ADDRESS_SUCCESS](state, payload) {
    state.isError = false;
    state.isLoading = true;
    state.addresses = state.addresses.filter(({ id }) => id !== payload);
  },

  [types.DELETE_ADDRESS_FAIL](state) {
    state.isError = true;
    state.isLoading = false;
    state.addresses = null;
  }
};

export default mutations;
