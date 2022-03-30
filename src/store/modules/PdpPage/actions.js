import mutationTypes from './mutationTypes';
import axios from '@/api/setup.js';
import getAverageRating from '@/utils/getAverageRating';

const actions = {
  async getProductInfo({ state, commit }, productId) {
    if (state.isLoading) {
      return;
    }

    commit(mutationTypes.SET_PRODUCT_INFO_STARTS);

    try {
      const { data } = await axios.get(`/products/${productId}`);

      data.averageRating = getAverageRating(data.feedbacks);

      commit(mutationTypes.SET_PRODUCT_INFO_SUCCESS, data);
    } catch (error) {
      commit(mutationTypes.SET_PRODUCT_INFO_FAIL, error.code);
    }
  },

  addFeedbackIntoProductInfo({ commit }, feedback) {
    commit(mutationTypes.ADD_FEEDBACK_TO_PRODUCT, feedback);
  },

  async updateProductInfoWithNewFeedback(
    { commit },
    { productId, updatedProductInfo }
  ) {
    commit(mutationTypes.SET_PRODUCT_INFO_STARTS);

    try {
      const { data } = await axios.put(
        `/products/${productId}`,
        updatedProductInfo
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
