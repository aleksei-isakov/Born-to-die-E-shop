import mutationTypes from './mutationTypes';

const actions = {
  addToCart({ commit }, product) {
    commit(mutationTypes.ADD_TO_CART, product);
  },

  increaseProductQuantity({ commit }, id) {
    commit(mutationTypes.INCREASE_PRODUCT_QUANTITY, id);
  },

  decreaseProductQuantity({ commit }, id) {
    commit(mutationTypes.DECREASE_PRODUCT_QUANTITY, id);
  },

  deleteFromCart({ commit }, id) {
    commit(mutationTypes.DELETE_FROM_CART, id);
  },

  clearCart({ commit }) {
    commit(mutationTypes.CLEAR_CART);
  }
};

export default actions;
