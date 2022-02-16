import mutationTypes from './mutationTypes';
import axios from 'axios';
import { BASE_URL } from '@/constants';

const axiosBackend = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    'Content-Type': 'application/json'
  }
});
const actions = {
  async getProductInfo({ state, commit }, productId) {
    if (state.isLoading) {
      return;
    }

    commit(mutationTypes.SET_PRODUCT_INFO_STARTS);

    try {
      const res = await axiosBackend.get(`/products/${productId}`);
      const productInfo = res.data;

      commit(mutationTypes.SET_PRODUCT_INFO_SUCCESS, productInfo);

      return Promise.resolve();
    } catch (error) {
      commit(mutationTypes.SET_PRODUCT_INFO_FAIL, error.code);

      return Promise.reject();
    }
  }
};

export default actions;
