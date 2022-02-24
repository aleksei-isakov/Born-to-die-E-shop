import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SET_PRODUCT_INFO_STARTS](state) {
    state.isLoading = true;
  },

  [mutationTypes.SET_PRODUCT_INFO_SUCCESS](state, productInfo) {
    state.productInfo = productInfo;
    state.isLoading = false;
  },

  [mutationTypes.SET_PRODUCT_INFO_FAIL](state) {
    state.isError = true;
    state.isLoading = false;
  }
};

export default mutations;
