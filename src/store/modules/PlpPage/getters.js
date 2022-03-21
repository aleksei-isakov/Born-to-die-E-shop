const getters = {
  products: (state) => state.products,
  productsQuantity: (state) => state.productsQuantity,
  errorCode: (state) => state.errorCode,
  categories: (state) => state.categories,
  currentCategory: (state) => state.currentCategory,
  numberOfPage: (state) => state.numberOfPage
};

export default getters;
