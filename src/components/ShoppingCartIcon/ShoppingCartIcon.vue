<template>
  <div class="cart__wrapper">
    <BaseButtonRouter class="link" path="/cart">
      <BaseCustomIcon :width="width" icon="shopping_basket_white_24dp" />

      <span v-if="itemsCount" class="cart__items__quantity">
        {{ itemsCount }}
      </span>
    </BaseButtonRouter>
  </div>
</template>

<script>
import { BaseCustomIcon, BaseButtonRouter } from '@/base_components/';
import { mapGetters } from 'vuex';

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

  computed: {
    ...mapGetters('ShoppingCartModule', ['productsInCart']),

    itemsCount() {
      return this.productsInCart.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  display: flex;
  position: relative;
}

.cart__items__quantity {
  position: absolute;
  top: 17px;
  left: 17px;
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
