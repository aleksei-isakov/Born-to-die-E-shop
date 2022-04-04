import mutationTypes from './mutationTypes';

const mutations = {
  [mutationTypes.ADD_TO_CART](state, product) {
    const existingProduct = findProductById(state.productsInCart, product.id);

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
    findProductById(state.productsInCart, id).quantity += 1;
  },

  [mutationTypes.DECREASE_PRODUCT_QUANTITY](state, id) {
    const product = findProductById(state.productsInCart, id);

    if (product.quantity > 1) {
      product.quantity -= 1;
    } else {
      state.productsInCart = removeProductById(state.productsInCart, id);
    }
  },

  [mutationTypes.DELETE_FROM_CART](state, id) {
    state.productsInCart = removeProductById(state.productsInCart, id);
  },

  [mutationTypes.CLEAR_CART](state) {
    state.productsInCart = [];
  },

  [mutationTypes.REQUEST_CART_SUCCESS](state) {
    state.isError = false;
    state.isLoading = false;
  },

  [mutationTypes.REQUEST_CART_LOADING](state) {
    state.isError = false;
    state.isLoading = true;
  },

  [mutationTypes.REQUEST_CART_FAIL](state) {
    state.isError = true;
    state.isLoading = false;
  },

  [mutationTypes.FIND_USER_CART_SUCCESS](state, { products }) {
    state.productsInCart = joinProductListsById(state.productsInCart, products);
  }
};

function findProductById(productList, id) {
  return productList.find((product) => product?.id === id);
}

function removeProductById(productList, id) {
  return productList.filter((el) => el.id !== id);
}

function joinProductListsById(productList1, productList2) {
  return productList2.reduce(
    (acc, el) => {
      const existingProduct = findProductById(acc, el.id);

      if (existingProduct) {
        existingProduct.quantity += el.quantity;
      } else {
        acc.push(el);
      }

      return acc;
    },
    [...productList1]
  );
}

export default mutations;
