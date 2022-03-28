<template>
  <div class="cart__wrapper">
    <div class="shopping-cart__wrapper">
      <shopping-cart-item
        v-for="cartItem in productsInCart"
        :id="cartItem.id"
        :key="cartItem.id"
        :name="cartItem.name"
        :quantity="cartItem.quantity"
        :price="cartItem.price"
        :images="cartItem.images"
      />
    </div>
    <div class="total-price">{{ getTotalPrice }}</div>
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
    }
  },

  computed: {
    getTotalPrice() {
      return `Total Price: ${this.totalPrice} $`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.shopping-cart__wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.total-price {
  margin-right: 50rem;
  margin-top: 40px;
  color: $font-color-subtitle;
  font-size: 1.1rem;
}

.cart__wrapper {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: $tablet-size) {
  .shopping-cart__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .total-price {
    width: 150px;
  }

  .cart__wrapper {
    display: flex;
    flex-direction: column;
  }
}
</style>
