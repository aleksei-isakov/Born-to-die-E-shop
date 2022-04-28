import mutationTypes from './mutationTypes';
import axios from '@/api/setup.js';

const actions = {
  addToWishlist({ commit, dispatch }, product) {
    commit(mutationTypes.ADD_TO_WISHLIST, product);
    dispatch('updateWishlist');
  },

  deleteFromWishlist({ commit, dispatch }, id) {
    commit(mutationTypes.DELETE_FROM_WISHLIST, id);
    dispatch('updateWishlist');
  },

  async createWishlist({ state, commit }, currentUserId) {
    commit(mutationTypes.REQUEST_WISHLIST_LOADING);

    const userWishlist = {
      id: currentUserId,
      products: state.productsInWishlist
    };

    try {
      await axios.post('/wishlist', userWishlist);

      commit(mutationTypes.REQUEST_WISHLIST_SUCCESS);
    } catch (error) {
      commit(mutationTypes.REQUEST_WISHLIST_FAIL);
    }
  },

  async updateWishlist({ state, commit }) {
    const currentUserId = localStorage.getItem('currentUserId');
    const userWishlist = {
      id: currentUserId,
      products: state.productsInWishlist
    };

    commit(mutationTypes.REQUEST_WISHLIST_LOADING);

    try {
      await axios.put(`/wishlist/${currentUserId}`, userWishlist);
      commit(mutationTypes.REQUEST_WISHLIST_SUCCESS);
    } catch (error) {
      commit(mutationTypes.REQUEST_WISHLIST_FAIL);
    }
  },

  async getWishlist({ commit, dispatch }, currentUserId) {
    commit(mutationTypes.REQUEST_WISHLIST_LOADING);

    try {
      const { data } = await axios.get('/wishlist');

      commit(mutationTypes.REQUEST_WISHLIST_SUCCESS);

      const userWishlist = data.find((el) => el?.id === currentUserId);

      if (userWishlist) {
        commit(mutationTypes.UPDATE_USER_WISHLIST, userWishlist.products);
        dispatch('updateWishlist');
      } else {
        dispatch('createWishlist', currentUserId);
      }
    } catch (error) {
      commit(mutationTypes.REQUEST_WISHLIST_FAIL);
    }
  }
};

export default actions;
