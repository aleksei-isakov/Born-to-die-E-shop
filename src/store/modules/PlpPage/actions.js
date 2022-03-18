import axios from '@/api/setup.js';
import mutationTypes from './mutationTypes';
const actions = {
  async getProductsList({ commit }, params) {
    commit(mutationTypes.SET_PRODUCTS_LOADING);

    if (
      !params['category.name'] ||
      params['category.name'] === 'All categories'
    ) {
      delete params['category.name'];
    }

    try {
      const { data, headers } = await axios.get(`/products`, { params });

      commit(mutationTypes.SET_PRODUCTS_SUCCESS, data);
      commit(mutationTypes.SET_QUANTITY, Number(headers['x-total-count']));
    } catch ({ message }) {
      commit(mutationTypes.SET_PRODUCTS_FAIL, message);
    }
  },

  async getCategories({ commit }) {
    commit(mutationTypes.GET_CATEGORIES_FAIL);

    try {
      const { data } = await axios.get(`/categories`);

      commit(mutationTypes.GET_CATEGORIES_SUCCESS, data);
    } catch (error) {
      commit(mutationTypes.GET_CATEGORIES_FAIL);
      console.error(error);
    }
  },

  getChangedCategory({ commit }, changedCategory) {
    commit(mutationTypes.GET_CHANGED_CATEGORY, changedCategory);
  },

  getNumberOfPage({ commit }, numberOfPage) {
    commit(mutationTypes.GET_NUMBER_OF_PAGE, numberOfPage);
  }
};

export default actions;
