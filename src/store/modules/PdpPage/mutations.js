import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SET_PRODUCT_INFO_STARTS](state) {
    state.isLoading = true;
    state.isError = false;
  },

  [mutationTypes.SET_PRODUCT_INFO_SUCCESS](state, productInfo) {
    state.productInfo = productInfo;
    state.isLoading = false;
    state.isError = false;
  },

  [mutationTypes.SET_PRODUCT_INFO_FAIL](state) {
    state.isLoading = false;
    state.isError = true;
  },

  [mutationTypes.ADD_FEEDBACK_TO_PRODUCT](state, feedback) {
    state.productInfo.feedbacks.push(feedback);
  },

  [mutationTypes.REMOVE_FEEDBACK_FROM_PRODUCT](state) {
    state.productInfo.feedbacks.pop();
  },

  [mutationTypes.DELETE_FEEDBACK_FROM_PRODUCT](state, feedbackId) {
    const feedbackIndex = state.productInfo.feedbacks.findIndex(
      (feedback) => feedback.id === feedbackId
    );

    if (feedbackIndex !== -1) {
      state.productInfo.feedbacks.splice(feedbackIndex, 1);
    }
  }
};

export default mutations;
