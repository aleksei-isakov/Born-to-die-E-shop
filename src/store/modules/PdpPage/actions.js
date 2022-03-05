import mutationTypes from './mutationTypes';
import axios from '@/api/setup.js';

const actions = {
  async getProductInfo({ state, commit }, productId) {
    if (state.isLoading) {
      return;
    }

    commit(mutationTypes.SET_PRODUCT_INFO_STARTS);

    try {
      const { data } = await axios.get(`/products/${productId}`);

      commit(mutationTypes.SET_PRODUCT_INFO_SUCCESS, data);
    } catch (error) {
      commit(mutationTypes.SET_PRODUCT_INFO_FAIL, error.code);
    }
  },

  addFeedbackIntoProduct({ commit }, feedback) {
    commit(mutationTypes.ADD_FEEDBACK_TO_PRODUCT, feedback);
  },

  async putFeedbackIntoProduct({ commit }, { productId, ubdateProductInfo }) {
    commit(mutationTypes.SET_PRODUCT_INFO_STARTS);

    try {
      const { data } = await axios.put(
        `/products/${productId}`,
        ubdateProductInfo,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        }
      );

      commit(mutationTypes.SET_PRODUCT_INFO_SUCCESS, data);
    } catch (error) {
      console.error(error);

      commit(mutationTypes.REMOVE_FEEDBACK_FROM_PRODUCT);
      commit(mutationTypes.SET_PRODUCT_INFO_FAIL, error.message);
    }
  }
};

export default actions;
