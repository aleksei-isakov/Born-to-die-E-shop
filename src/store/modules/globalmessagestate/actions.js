import mutationTypes from './mutationTypes';

const actions = {
  showGlobalMessage({ commit }, payload) {
    commit(mutationTypes.SHOW_MESSAGE, payload);
  },
  closeSnackbar({ commit }) {
    commit(mutationTypes.CLOSE_SNACKBAR);
  }
};

export default actions;
