import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.REQUEST_WISHLIST_LOADING](state) {
    state.isLoading = true;
  },

  [mutationTypes.REQUEST_WISHLIST_SUCCESS](state) {
    state.isLoading = false;
    state.isError = false;
  },

  [mutationTypes.REQUEST_WISHLIST_FAIL](state) {
    state.isLoading = false;
    state.isError = true;
  },

  [mutationTypes.ADD_TO_WISHLIST](state, product) {
    state.productsInWishlist.push(product);
  },

  [mutationTypes.DELETE_FROM_WISHLIST](state, id) {
    state.productsInWishlist = state.productsInWishlist.filter(
      (product) => product.id !== id
    );
  }
};

export default mutations;
