import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SET_PRODUCTS_TO_STATE](state, products) {
    state.products = products;
  }
};

export default mutations;
