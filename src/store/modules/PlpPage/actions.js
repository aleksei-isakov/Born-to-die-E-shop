import axios from '@/api/setup.js';
import mutationTypes from './mutationTypes';

const actions = {
  async getProducts({ commit }, params) {
    commit(mutationTypes.SET_PRODUCTS_LOADING);

    try {
      const { data, headers } = await axios.get(`/products?_limit=9`, {
        params
      });

      commit(mutationTypes.SET_PRODUCTS_SUCCESS, data);
      commit(mutationTypes.SET_QUANTITY, Number(headers['x-total-count']));
    } catch ({ message }) {
      commit(mutationTypes.SET_PRODUCTS_FAIL, message);
    }
  }
};

export default actions;
