import mutationTypes from './mutationTypes';

const actions = {
  async getProductsList({ commit }) {
    fetch('http://localhost:3000/664/products')
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        commit(mutationTypes.SET_PRODUCTS_SUCCESS, data);
      })
      .catch((error) => {
        commit(mutationTypes.SET_PRODUCTS_FAIL, error.code);
      });
  }
};

export default actions;
