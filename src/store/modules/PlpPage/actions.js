import axios from '@/api/setup.js';
import mutationTypes from './mutationTypes';

const actions = {
  async getProducts({ commit }) {
    commit(mutationTypes.SET_PRODUCTS_LOADING);

    try {
      const { data } = await axios.get('/products');

      commit(mutationTypes.SET_PRODUCTS_SUCCESS, data);

      return data;
    } catch ({ message }) {
      commit(mutationTypes.SET_PRODUCTS_FAIL, message);
    }
  }
};

export default actions;
