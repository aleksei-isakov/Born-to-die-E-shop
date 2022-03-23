import mutationTypes from './mutationTypes';

const actions = {
  showGlobalMessage({ commit }, payload) {
    commit(mutationTypes.SHOW_MESSAGE, payload);
  },
  closeGlobalMessage({ commit }) {
    commit(mutationTypes.CLOSE_MESSAGE);
  }
};

export default actions;
