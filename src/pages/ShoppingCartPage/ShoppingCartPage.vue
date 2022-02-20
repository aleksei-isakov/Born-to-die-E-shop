<template>
  <div class="shopping-cart-page__wrapper"></div>
</template>

<script>
import ShoppingCardList from '@/components/ShoppingCardList/ShoppingCardList';
import shoppingCartMock from './ShoppingCardMock.json';

export default {
  name: 'ShoppingCartPage',

  components: { ShoppingCardList },

  data: () => ({
    shoppingCartData: shoppingCartMock
  })
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.page-name {
  margin-right: 50rem;
  color: $font-color-text;
  font-size: 2.2rem;
}

.page-path {
  margin-right: 50rem;
  color: $font-color-text;
  margin-top: 10px;
}

@media screen and (max-width: $tablet-size) {
  .page-name {
    margin-right: 30rem;
    font-size: 2.2rem;
    width: 30%;
  }

  .page-path {
    margin-right: 30rem;
    margin-top: 20%;
    width: 30%;
  }
}
</style>
