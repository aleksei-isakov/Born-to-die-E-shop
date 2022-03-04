import axios from '@/api/setup.js';
import mutationTypes from './mutationTypes';
const actions = {
  async getProductsList({ commit }, params) {
    try {
      let data;
      let link;

      commit(mutationTypes.SET_PRODUCTS_LOADING);

      if (params) {
        let { sortField, sortOrder } = params;

        link = `/products?_sort=${sortField}&_order=${sortOrder}`;
      } else {
        link = `/products`;
      }
      let result = await axios.get(link);

      data = result.data;
      commit(mutationTypes.SET_PRODUCTS_SUCCESS, data);
    } catch (error) {
      commit(mutationTypes.SET_PRODUCTS_FAIL, error.code);
    }
  }
};

export default actions;
