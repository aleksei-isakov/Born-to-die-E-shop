<template>
  <div class="cart-list__wrapper">
    <div class="cart-list__product-list">
      <shopping-cart-item
        v-for="cartItem in productsInCart"
        :id="cartItem.id"
        :key="cartItem.id"
        :name="cartItem.name"
        :quantity="cartItem.quantity"
        :price="cartItem.price"
        :discount-percentage="cartItem.discountPercentage"
        :price-with-discount="cartItem.priceWithDiscount"
        :images="cartItem.images"
      />
    </div>
    <div class="cart-list__total-price">{{ getTotalPrice }}</div>
  </div>
</template>

<script>
import ShoppingCartItem from '@/components/ShoppingCartItem/ShoppingCartItem';
export default {
  name: 'ShoppingCartList',

  components: { ShoppingCartItem },

  props: {
    productsInCart: {
      type: Array,
      default: () => [],
      required: true
    },

    totalPrice: {
      type: Number,
      required: true,
      default: 0
    },

    checkedProductsInCart: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    getTotalPrice() {
      return `Total Price: ${this.totalPrice.toLocaleString('ru-RU')} $`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.cart-list__wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
}

.cart-list__product-list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.cart-list__total-price {
  margin-top: 40px;
  text-align: left;
  color: $font-color-subtitle;
  font-size: 1.1rem;
}
</style>
