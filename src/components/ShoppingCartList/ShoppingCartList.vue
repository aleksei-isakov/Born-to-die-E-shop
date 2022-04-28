<template>
  <div class="cart-list__wrapper">
    <shopping-cart-group
      v-for="group in productsGroupList"
      :key="group.seller.id"
      :seller="group.seller"
      :products="group.products"
    />
    <div class="cart-list__total-price">{{ totalPrice | currency }}</div>
  </div>
</template>

<script>
import ShoppingCartGroup from '@/components/ShoppingCartGroup/ShoppingCartGroup';

export default {
  name: 'ShoppingCartList',

  components: { ShoppingCartGroup },

  props: {
    productsGroupList: {
      type: Array,
      default: () => [],
      required: true
    },

    totalPrice: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.cart-list__wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;
}

.cart-list__total-price {
  margin-top: 40px;
  text-align: left;
  color: $font-color-subtitle;
  font-size: 1.1rem;
}

.group {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__checkbox {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  &__title {
    display: flex;
    align-items: center;
    gap: 20px;

    h2 {
      text-align: left;
      font-weight: 500;
    }
  }

  &__list {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
