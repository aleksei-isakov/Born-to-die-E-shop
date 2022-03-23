import mutationTypes from './mutationTypes';

const actions = {
  addToCart({ commit }, payload) {
    commit(mutationTypes.ADD_TO_CART, payload);
  },

  deleteFromCart({ commit }, id) {
    commit(mutationTypes.DELETE_FROM_CART, id);
  },

  clearCart({ commit }) {
    commit(mutationTypes.CLEAR_CART);
  }
};

export default actions;
