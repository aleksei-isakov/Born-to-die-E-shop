import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.ADD_TO_CART](state, payload) {
    state.productsInCart.push(payload);
  }
};

export default mutations;
