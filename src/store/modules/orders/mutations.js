import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SET_ORDERS_LOADING](state) {
    state.errorCode = false;
    state.isLoading = true;
  },

  [mutationTypes.SET_ORDERS_SUCCESS](state, data) {
    state.errorCode = false;
    state.ordersList = data;
  },

  [mutationTypes.SET_ORDERS_FAIL](state, status) {
    state.isLoading = false;
    state.errorCode = status;
  }
};

export default mutations;
