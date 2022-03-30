const getters = {
  productsInCart: (state) => state.productsInCart,
  productsInCartQuantity: (state) =>
    state.productsInCart.reduce((acc, el) => acc + el?.quantity, 0),
  totalPrice: (state) =>
    state.checkedProductsInCart.reduce(
      (acc, el) => acc + el?.price * el?.quantity,
      0
    ),
  checkedProductsInCart: (state) => state.checkedProductsInCart
};

export default getters;
