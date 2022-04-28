import getProductsGroupedBySeller from '@/utils/getProductsGroupedBySeller';

const getters = {
  productsInCart: (state) => state.productsInCart,
  productsInCartQuantity: (state) =>
    state.productsInCart.reduce((acc, el) => acc + el?.quantity, 0),
  totalPrice: (state) =>
    state.productsInCart.reduce((acc, el) => {
      if (el.checked) {
        return acc + el?.priceWithDiscount * el?.quantity;
      }

      return acc;
    }, 0),
  checkedProductsInCart: (state) =>
    state.productsInCart.filter((el) => el.checked),
  productsInCartGroupedBySeller: (state) =>
    getProductsGroupedBySeller(state.productsInCart)
};

export default getters;
