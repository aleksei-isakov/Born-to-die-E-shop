import mutationTypes from './mutationTypes';

const actions = {
  setMobile({ commit }) {
    commit(mutationTypes.SWITCH_TO_MOBILE);
  },

  setDesktop({ commit }) {
    commit(mutationTypes.SWITCH_TO_DESKTOP);
  }
};

export default actions;
