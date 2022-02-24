<template>
  <div class="cart__wrapper">
    <div class="shopping-cart__wrapper">
      <shopping-card-item
        v-for="(cartItem, i) in shoppingCartData"
        :key="i"
        :description="cartItem.description"
        :quantity="cartItem.quantity"
        :price="cartItem.price"
        :index="i"
        v-on="$listeners"
      />
    </div>
    <div class="total-price">{{ totalPrice }}</div>
  </div>
</template>

<script>
import ShoppingCardItem from '@/components/ShoppingCardItem/ShoppingCardItem';

export default {
  name: 'ShoppingCardList',

  components: { ShoppingCardItem },

  props: {
    shoppingCartData: {
      type: Array,
      default: () => [],
      require: true
    }
  },

  computed: {
    totalPrice() {
      let totalPrice = 0;

      if (this.shoppingCartData.length === 0) return `Total Price: 0 $`;
      totalPrice = this.shoppingCartData.map(({ price, quantity }) => {
        return price * quantity;
      });

      return `Total Price: ${totalPrice.reduce((acc, _) => acc + _)} $`;
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
