import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SHOW_MESSAGE](state, payload) {
    state.isError = true;
    state.errorMessage = payload;
  },
  [mutationTypes.CLOSE_SNACKBAR](state) {
    state.isError = false;
  }
};

export default mutations;
