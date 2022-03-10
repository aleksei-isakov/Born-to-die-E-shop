import * as types from './mutationsTypes';
import { BASE_URL } from '@/constants';
import axios from '@/api/setup.js';

const actions = {
  async registerUser({ commit }, payload) {
    await authRequest(
      'register',
      commit,
      payload,
      types.REGISTER_USER_LOADING,
      types.REGISTER_USER_SUCCESS,
      types.REGISTER_USER_FAIL
    );
  },

  async loginUser({ commit }, payload) {
    await authRequest(
      'login',
      commit,
      payload,
      types.LOGIN_USER_LOADING,
      types.LOGIN_USER_SUCCESS,
      types.LOGIN_USER_FAIL
    );
  },

  async getUserInfo({ commit }) {
    const accessToken = localStorage.getItem('accessToken');
    const currentUserId = localStorage.getItem('currentUserId');

    commit(types.SET_USER_INFO_LOADING);

    if (accessToken && currentUserId) {
      try {
        const { data } = await axios.get(`${BASE_URL}/users/${currentUserId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        const userInfo = {
          accessToken: accessToken,
          user: data
        };

        commit(types.SET_USER_INFO_SUCCESS, userInfo);
      } catch (error) {
        console.error(error);
        commit(types.SET_USER_INFO_FAIL, error.message);

        if (error.response.status === 401) {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('currentUserId');
        }
      }
    }
  }
};

async function authRequest(
  endpoint,
  commit,
  payload,
  mutationsTypesLoading,
  mutationsTypesSuccess,
  mutationsTypesFail
) {
  try {
    commit(mutationsTypesLoading);
    const { data } = await axios.post(`${BASE_URL}/${endpoint}`, payload);

    commit(mutationsTypesSuccess, data);

    localStorage.setItem('accessToken', data?.accessToken);
    localStorage.setItem('currentUserId', data?.user?.id);
  } catch (error) {
    console.error(error);
    commit(mutationsTypesFail, error.message);
  }
}

export default actions;
