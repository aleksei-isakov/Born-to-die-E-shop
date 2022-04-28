import * as types from './mutationsTypes';
import axios from '@/api/setup.js';

const ADDRESSES = 'addresses';
const actions = {
  async getAddresses({ dispatch, commit }) {
    commit(types.SET_ADDRESSES_LOADING);

    try {
      const { data } = await axios.get(`/${ADDRESSES}`);

      commit(types.SET_ADDRESSES_SUCCESS, data);
    } catch (error) {
      console.error(error);
      commit(types.SET_ADDRESSES_FAIL, error.message);
    }
  },

  async updateAddress({ dispatch, commit }, payload) {
    const { id } = payload;

    commit(types.UPDATE_ADDRESS_LOADING);

    try {
      const { data } = await axios.patch(`/${ADDRESSES}/${id}`, {
        ...payload,
        updatedAt: new Date()
      });

      commit(types.UPDATE_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.error(error);
      commit(types.UPDATE_ADDRESS_FAIL, error.message);
    }
  },

  async createNewAddress({ dispatch, commit }, payload) {
    commit(types.ADD_NEW_ADDRESS_LOADING);

    try {
      const { data } = await axios.post(`/${ADDRESSES}`, {
        ...payload,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      commit(types.ADD_NEW_ADDRESS_SUCCESS, data);
    } catch (error) {
      console.error(error);
      commit(types.ADD_NEW_ADDRESS_FAIL, error.message);
    }
  },

  async deleteAddress({ dispatch, commit }, { id }) {
    commit(types.DELETE_ADDRESS_LOADING);

    try {
      await axios.delete(`/${ADDRESSES}/${id}`);

      commit(types.DELETE_ADDRESS_SUCCESS, id);
    } catch (error) {
      console.error(error);
      commit(types.ADD_NEW_ADDRESS_FAIL, error.message);
    }
  },

  async setCurrentAddress({ commit }, payload) {
    commit(types.SET_CURRENT_ADDRESS, payload);
  }
};

export default actions;
