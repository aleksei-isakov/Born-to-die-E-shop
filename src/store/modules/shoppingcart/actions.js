import mutationTypes from './mutationTypes';
import axios from '@/api/setup.js';

const actions = {
  addToCart({ commit, dispatch }, product) {
    commit(mutationTypes.ADD_TO_CART, product);
    commit(mutationTypes.CHECK_CART_ITEM, product.id);
    dispatch('updateCart');
  },

  increaseProductQuantity({ commit, dispatch }, id) {
    commit(mutationTypes.INCREASE_PRODUCT_QUANTITY, id);
    dispatch('updateCart');
  },

  decreaseProductQuantity({ commit, dispatch }, id) {
    commit(mutationTypes.DECREASE_PRODUCT_QUANTITY, id);
    dispatch('updateCart');
  },

  deleteFromCart({ commit, dispatch }, id) {
    commit(mutationTypes.DELETE_FROM_CART, id);
    dispatch('updateCart');
  },

  clearCart({ commit, dispatch }) {
    commit(mutationTypes.CLEAR_CART);
    dispatch('updateCart');
  },

  checkCartItem({ commit, dispatch }, id) {
    commit(mutationTypes.CHECK_CART_ITEM, id);
    dispatch('updateCart');
  },

  uncheckCartItem({ commit, dispatch }, id) {
    commit(mutationTypes.UNCHECK_CART_ITEM, id);
    dispatch('updateCart');
  },

  async createCart({ state, commit }, currentUserId) {
    commit(mutationTypes.REQUEST_CART_LOADING);

    const userCart = {
      id: currentUserId,
      products: state.productsInCart
    };

    try {
      await axios.post('/cart', userCart);

      commit(mutationTypes.REQUEST_CART_SUCCESS);
    } catch (error) {
      commit(mutationTypes.REQUEST_CART_FAIL);
    }
  },

  async updateCart({ state, commit }) {
    const currentUserId = localStorage.getItem('currentUserId');

    if (currentUserId) {
      const userCart = {
        id: currentUserId,
        products: state.productsInCart
      };

      commit(mutationTypes.REQUEST_CART_LOADING);

      try {
        await axios.put(`/cart/${currentUserId}`, userCart);
        commit(mutationTypes.REQUEST_CART_SUCCESS);
      } catch (error) {
        commit(mutationTypes.REQUEST_CART_FAIL);
      }
    } else {
      localStorage.setItem('userCart', JSON.stringify(state.productsInCart));
    }
  },

  async getCart({ commit, dispatch }, currentUserId) {
    commit(mutationTypes.REQUEST_CART_LOADING);

    try {
      const { data } = await axios.get(`/cart`);

      commit(mutationTypes.REQUEST_CART_SUCCESS);

      const userCart = data.find((el) => el?.id === currentUserId);

      if (userCart) {
        commit(mutationTypes.FIND_USER_CART_SUCCESS, userCart.products);
        dispatch('updateCart');
      } else {
        dispatch('createCart', currentUserId);
      }
      localStorage.removeItem('userCart');
    } catch (error) {
      commit(mutationTypes.REQUEST_CART_FAIL);
    }
  },

  getCartFromLocalStorage({ commit }) {
    const cart = JSON.parse(localStorage.getItem('userCart'));

    if (cart) {
      commit(mutationTypes.GET_CART_FROM_LOCAL_STORAGE, cart);
    }
  }
};

export default actions;
