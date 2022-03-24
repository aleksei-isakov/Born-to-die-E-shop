const getters = {
  productsInCart: (state) => state.productsInCart,
  productsInCartQuantity: (state) =>
    state.productsInCart.reduce((acc, el) => acc + el?.quantity, 0),
  totalPrice: (state) =>
    state.productsInCart.reduce((acc, el) => acc + el?.price * el?.quantity, 0)
};

export default getters;
