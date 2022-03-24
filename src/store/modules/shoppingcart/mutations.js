import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.ADD_TO_CART](state, product) {
    const existingProduct = findProductById(state, product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      state.productsInCart.push({
        ...product,
        quantity: 1
      });
    }
  },

  [mutationTypes.INCREASE_PRODUCT_QUANTITY](state, id) {
    findProductById(state, id).quantity += 1;
  },

  [mutationTypes.DECREASE_PRODUCT_QUANTITY](state, id) {
    const product = findProductById(state, id);

    if (product.quantity > 1) {
      product.quantity -= 1;
    }
  },

  [mutationTypes.DELETE_FROM_CART](state, id) {
    state.productsInCart = state.productsInCart.filter((el) => el.id !== id);
  },

  [mutationTypes.CLEAR_CART](state) {
    state.productsInCart = [];
  }
};

function findProductById(state, id) {
  return state.productsInCart.find((product) => product.id === id);
}

export default mutations;
