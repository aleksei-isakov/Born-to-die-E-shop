import * as types from './mutationsTypes';
import axios from '@/api/setup.js';

const actions = {
  async getAddresses({ dispatch, commit }) {
    commit(types.SET_ADDRESSES_LOADING);

    try {
      const { data } = await axios.get(`/addresses`);

      commit(types.SET_ADDRESSES_SUCCESS, data);
    } catch (error) {
      console.error(error);
      commit(types.SET_ADDRESSES_FAIL, error.message);
    }
  },

  async updateAddress({ dispatch, commit }, payload) {
    const { id } = payload;

    commit(types.SET_UPDATE_ADDRESS_LOADING);

    try {
      const { data } = await axios.patch(`/addresses/${id}`, {
        ...payload,
        updatedAt: new Date()
      });

      commit(types.SET_UPDATE_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.error(error);
      commit(types.SET_UPDATE_ADDRESS_FAIL, error.message);
    }
  },

  async createNewAddress({ dispatch, commit }, payload) {
    commit(types.SET_ADD_NEW_ADDRESS_LOADING);

    try {
      const { data } = await axios.post(`/addresses`, {
        ...payload,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      commit(types.SET_ADD_NEW_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.error(error);
      commit(types.SET_ADD_NEW_ADDRESS_FAIL, error.message);
    }
  },

  async deleteAddress({ dispatch, commit }, payload) {
    const id = payload;

    commit(types.SET_DELETE_ADDRESS_LOADING);

    try {
      await axios.delete(`/addresses/${id}`);

      commit(types.SET_DELETE_ADDRESS_SUCCESS, id);
    } catch (error) {
      console.error(error);
      commit(types.SET_ADD_NEW_ADDRESS_FAIL, error.message);
    }
  }
};

export default actions;
