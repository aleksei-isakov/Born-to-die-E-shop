import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.SET_PRODUCTS_LOADING](state) {
    state.isLoading = true;
  },

  [mutationTypes.SET_PRODUCTS_SUCCESS](state, products) {
    state.products = products;
  },
  [mutationTypes.SET_QUANTITY](state, data) {
    state.productsQuantity = data;
  },

  [mutationTypes.SET_PRODUCTS_FAIL](state, status) {
    state.errorCode = status;
  },

  [mutationTypes.GET_CATEGORIES_LOADING](state) {
    state.isLoadingCategories = true;
    state.isErrorCategories = false;
  },

  [mutationTypes.GET_CATEGORIES_SUCCESS](state, data) {
    state.isLoadingCategories = false;
    state.categories = data.reduce(
      (acc, dataObj) => {
        acc.push(dataObj.name);

        return acc;
      },
      ['All categories']
    );
  },

  [mutationTypes.GET_CATEGORIES_FAIL](state) {
    state.isLoadingCategories = false;
    state.isErrorCategories = true;
  },

  [mutationTypes.GET_CHANGED_CATEGORY](state, changedCategory) {
    state.changedCategory = changedCategory;
  },

  [mutationTypes.GET_NUMBER_OF_PAGE](state, numberOfPage) {
    state.numberOfPage = numberOfPage;
  }
};

export default mutations;
