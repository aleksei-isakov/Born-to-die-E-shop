import axios from 'axios';
import { BASE_URL } from '@/constants.js';

const actions = {
  GET_PRODUCTS_FROM_API({ commit }) {
    return axios(`${BASE_URL}/products`, {
      method: 'GET'
    })
      .then((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data);

        return products;
      })
      .catch((error) => {
        console.log(error);

        return error;
      });
  }
};

export default actions;
