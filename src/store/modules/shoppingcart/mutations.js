import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.ADD_TO_CART](state, payload) {
    state.productsInCart.push(payload);
  },

  [mutationTypes.DELETE_FROM_CART](state, id) {
    state.productsInCart = state.productsInCart.filter((el) => el.id !== id);
  },

  [mutationTypes.CLEAR_CART](state) {
    state.productsInCart = [];
  }
};

export default mutations;
