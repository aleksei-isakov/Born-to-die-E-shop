import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SET_PRODUCTS_LOADING](state) {
    state.isLoading = true;
  },

  [mutationTypes.SET_PRODUCTS_SUCCESS](state, products) {
    state.products = products;
  },
  [mutationTypes.SET_QUANTITY](state, data) {
    state.productsQuantity = data;
  },

  [mutationTypes.SET_PRODUCTS_FAIL](state, status) {
    state.errorCode = status;
  }
};

export default mutations;
