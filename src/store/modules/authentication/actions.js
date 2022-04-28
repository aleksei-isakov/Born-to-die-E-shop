import * as types from './mutationsTypes';
import axios from '@/api/setup.js';

const actions = {
  clearCurrentUser({ commit }) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('currentUserId');
    commit(types.CLEAR_CURRENT_USER);
  },

  async registerUser({ commit, dispatch }, payload) {
    await authRequest(
      'register',
      commit,
      dispatch,
      payload,
      types.REGISTER_USER_LOADING,
      types.REGISTER_USER_SUCCESS,
      types.REGISTER_USER_FAIL
    );
  },

  async loginUser({ commit, dispatch }, payload) {
    await authRequest(
      'login',
      commit,
      dispatch,
      payload,
      types.LOGIN_USER_LOADING,
      types.LOGIN_USER_SUCCESS,
      types.LOGIN_USER_FAIL
    );
  },

  async getUserInfo({ dispatch, commit }) {
    const accessToken = localStorage.getItem('accessToken');
    const currentUserId = localStorage.getItem('currentUserId');

    commit(types.SET_USER_INFO_LOADING);

    if (accessToken && currentUserId) {
      try {
        const { data } = await axios.get(`/users/${currentUserId}`);
        const userInfo = {
          accessToken: accessToken,
          user: data
        };

        commit(types.SET_USER_INFO_SUCCESS, userInfo);

        dispatch('ShoppingCartModule/getCart', currentUserId, { root: true });
        dispatch('WishlistModule/getWishlist', currentUserId, { root: true });
      } catch (error) {
        console.error(error);
        commit(types.SET_USER_INFO_FAIL, error.message);
      }
    } else {
      dispatch('ShoppingCartModule/getCartFromLocalStorage', null, {
        root: true
      });
    }
  },

  async updateUserInfo({ dispatch, commit }, payload) {
    const accessToken = localStorage.getItem('accessToken');
    const currentUserId = localStorage.getItem('currentUserId');
    const { email, firstName, lastName, phoneNumber, gender, birthDate } =
      payload;

    commit(types.SET_USER_UPDATE_INFO_LOADING);

    if (accessToken && currentUserId) {
      try {
        const { data } = await axios.patch(`/users/${currentUserId}`, {
          email,
          firstName,
          lastName,
          phoneNumber,
          gender,
          birthDate,
          updatedAt: new Date()
        });
        const userInfo = {
          accessToken: accessToken,
          user: data
        };

        commit(types.SET_USER_UPDATE_INFO_SUCCESS, userInfo);

        dispatch('ShoppingCartModule/getCart', currentUserId, { root: true });
        dispatch('WishlistModule/getWishlist', currentUserId, { root: true });
      } catch (error) {
        console.error(error);
        commit(types.SET_USER_UPDATE_INFO_FAIL, error.message);
      }
    }
  }
};

async function authRequest(
  endpoint,
  commit,
  dispatch,
  payload,
  mutationsTypesLoading,
  mutationsTypesSuccess,
  mutationsTypesFail
) {
  try {
    commit(mutationsTypesLoading);
    const { data } = await axios.post(`/${endpoint}`, payload);
    const currentUserId = data?.user?.id;

    commit(mutationsTypesSuccess, data);

    localStorage.setItem('accessToken', data?.accessToken);
    localStorage.setItem('currentUserId', currentUserId);

    dispatch('ShoppingCartModule/getCart', currentUserId, { root: true });
  } catch (error) {
    console.error(error);
    commit(mutationsTypesFail, error.message);
  }
}

export default actions;
