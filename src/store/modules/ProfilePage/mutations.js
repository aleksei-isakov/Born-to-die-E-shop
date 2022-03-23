import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SWITCH_TO_MOBILE](state) {
    state.isMobile = true;
    state.isDesktop = false;
  },

  [mutationTypes.SWITCH_TO_DESKTOP](state) {
    state.isMobile = false;
    state.isDesktop = true;
  }
};

export default mutations;
