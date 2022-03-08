import axios from '@/api/setup.js';
import mutationTypes from './mutationTypes';
const actions = {
  async getProductsList({ commit }, params) {
    try {
      let data;

      commit(mutationTypes.SET_PRODUCTS_LOADING);
      const parameters = params
        ? { _sort: params.sortField, _order: params.sortOrder }
        : null;
      let result = await axios.get('/products', {
        params: parameters
      });

      data = result.data;
      commit(mutationTypes.SET_PRODUCTS_SUCCESS, data);
    } catch (error) {
      commit(mutationTypes.SET_PRODUCTS_FAIL, error.code);
    }
  }
};

export default actions;
