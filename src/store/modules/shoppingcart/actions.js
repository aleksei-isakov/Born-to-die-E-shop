import mutationTypes from './mutationTypes';

const actions = {
  addToCart({ commit }, payload) {
    commit(mutationTypes.ADD_TO_CART, payload);
  }
};

export default actions;
