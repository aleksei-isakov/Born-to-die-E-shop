const getters = {
  productInfo: (state) => state.productInfo,
  isError: (state) => state.isError,
  sortedFeedbacks: (state) =>
    [...state.productInfo.feedbacks].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    )
};

export default getters;
