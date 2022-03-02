import axios from '@/api/setup.js';
import mutationTypes from './mutationTypes';

const actions = {
  async getProductsList({ commit }, sortValue) {
    let sortField = 'createdAt';
    let sortOrder = 'asc';

    sortValue === 'OLD_TO_NEW' || sortValue === 'CHEAP_TO_EXPENSIVE'
      ? (sortOrder = 'asc')
      : (sortOrder = 'desc');

    sortValue === 'OLD_TO_NEW' || sortValue === 'NEW_TO_OLD'
      ? (sortField = 'createdAt')
      : (sortField = 'price');

    try {
      commit(mutationTypes.SET_PRODUCTS_LOADING);
      let data;

      if (sortValue) {
        let result = await axios.get(
          `/products?_sort=${sortField}&_order=${sortOrder}`
        );

        data = result.data;
      } else {
        let result = await axios.get('/products');

        data = result.data;
      }

      commit(mutationTypes.SET_PRODUCTS_SUCCESS, data);
    } catch (error) {
      commit(mutationTypes.SET_PRODUCTS_FAIL, error.code);
    }
  }
};

export default actions;
