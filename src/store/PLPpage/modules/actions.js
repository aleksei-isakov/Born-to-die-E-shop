import axios from 'axios';
import { BASE_URL } from '@/constants.js';
import mutationTypes from './mutationTypes';

const actions = {
  async GET_PRODUCTS_FROM_API({ commit }) {
    try {
      commit(mutationTypes.SET_PRODUCTS_LOADING);
      const products = await axios(`${BASE_URL}/products`, {
        method: 'GET'
      });

      commit(mutationTypes.SET_PRODUCTS_SUCCESS, products.data);

      return products;
    } catch (error) {
      commit(mutationTypes.SET_PRODUCTS_FAIL, error.code);
    }
  }
};

export default actions;
