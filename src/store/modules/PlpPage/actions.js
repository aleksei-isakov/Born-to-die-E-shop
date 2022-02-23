import axios from 'axios';
import { BASE_URL } from '@/constants.js';
import mutationTypes from './mutationTypes';

const actions = {
  async getProducts({ commit }) {
    try {
      commit(mutationTypes.SET_PRODUCTS_LOADING);
      const { data } = await axios.get(`${BASE_URL}/products`);

      commit(mutationTypes.SET_PRODUCTS_SUCCESS, data);

      return data;
    } catch ({ code }) {
      commit(mutationTypes.SET_PRODUCTS_FAIL, code);
    }
  }
};

export default actions;
