import axios from '@/api/setup.js';
import mutationTypes from './mutationTypes';

const actions = {
  async getOrdersList({ commit }) {
    try {
      commit(mutationTypes.SET_ORDERS_LOADING);
      const { data } = await axios.get('/orders');

      commit(mutationTypes.SET_ORDERS_SUCCESS, data);
    } catch (error) {
      commit(mutationTypes.SET_ORDERS_FAIL, error.code);
    }
  }
};

export default actions;
