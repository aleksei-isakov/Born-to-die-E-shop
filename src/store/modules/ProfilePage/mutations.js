import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SWITCH_TO_MOBILE](state) {
    state.isDesktop = false;
  },

  [mutationTypes.SWITCH_TO_DESKTOP](state) {
    state.isDesktop = true;
  }
};

export default mutations;
