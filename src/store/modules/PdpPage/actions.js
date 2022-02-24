import mutationTypes from './mutationTypes';
import axios from '@/api/setup.js';

const actions = {
  async getProductInfo({ state, commit }, productId) {
    if (state.isLoading) {
      return;
    }

    commit(mutationTypes.SET_PRODUCT_INFO_STARTS);

    try {
      const { data } = await axios.get(`/products/${productId}`);

      commit(mutationTypes.SET_PRODUCT_INFO_SUCCESS, data);
    } catch (error) {
      commit(mutationTypes.SET_PRODUCT_INFO_FAIL, error.code);
    }
  }
};

export default actions;
