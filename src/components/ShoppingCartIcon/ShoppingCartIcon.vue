<template>
  <div class="cart__wrapper">
    <BaseButtonRouter class="link" path="/cart">
      <BaseCustomIcon :width="width" icon="shopping_basket_white_24dp" />

      <span
        class="cart__is__empty"
        :class="{ cart__items__quantity: cartItemsCount.length !== 0 }"
      >
        {{ cartItemsCount.length }}
      </span>
    </BaseButtonRouter>
  </div>
</template>

<script>
import { BaseCustomIcon, BaseButtonRouter } from '@/base_components/';

export default {
  name: 'ShoppingCartIcon',

  components: {
    BaseButtonRouter,
    BaseCustomIcon
  },

  props: {
    width: {
      type: [String, Number],
      default: '55'
    }
  },

  data() {
    return {
      cartItemsCount: []
    };
  }
};
</script>

<style lang="scss" scoped>
.cart__wrapper {
  margin-bottom: -15px;
}

.link {
  display: flex;
  position: relative;
}

.cart__is__empty {
  display: none;
}

.cart__items__quantity {
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 50%;
  background-color: #f30808;
  min-width: 17px;
  height: 17px;
  display: inline-block;
  color: #fcfcfd;
  font-weight: bold;
  font-size: 12px;
}
</style>
