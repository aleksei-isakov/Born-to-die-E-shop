const getters = {
  productsInCart: (state) => state.productsInCart,
  productsInCartQuantity: (state) =>
    state.productsInCart.reduce((acc, el) => acc + el?.quantity, 0),
  totalPrice: (state) =>
    state.productsInCart
      .filter((el) => el.checked)
      .reduce((acc, el) => acc + el?.price * el?.quantity, 0),
  checkedProductsInCart: (state) =>
    state.productsInCart.filter((el) => el.checked)
};

export default getters;
