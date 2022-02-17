import axios from '@/api/setup.js';
import mutationTypes from './mutationTypes';

const actions = {
  async getProductsList({ commit }) {
    try {
      const { data } = await axios.get(`/products`);

      commit(mutationTypes.SET_PRODUCTS_SUCCESS, data);
    } catch (error) {
      commit(mutationTypes.SET_PRODUCTS_FAIL, error.code);
    }
  }
};

export default actions;
