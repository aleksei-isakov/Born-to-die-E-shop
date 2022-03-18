const getters = {
  products: (state) => state.products,
  productsQuantity: (state) => state.productsQuantity,
  errorCode: (state) => state.errorCode,
  categories: (state) => state.categories,
  changedCategory: (state) => state.changedCategory,
  numberOfPage: (state) => state.numberOfPage
};

export default getters;
