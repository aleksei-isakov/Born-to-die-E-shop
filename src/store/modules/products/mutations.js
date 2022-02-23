import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SET_PRODUCTS_LOADING](state) {
    state.isLoading = true;
  },
  [mutationTypes.SET_PRODUCTS_SUCCESS](state, data) {
    state.productsList = data;
  },
  [mutationTypes.SET_PRODUCTS_FAIL](state, status) {
    state.errorCode = status;
  }
};

export default mutations;
