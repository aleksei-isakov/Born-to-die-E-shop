<template>
  <div class="shopping-cart-page__wrapper">
    <EmptyCartPopup
      v-if="isPopupVisible"
      @onClickClosePopup="onClickClosePopup"
      @onClickClearShoppingCart="onClickClearShoppingCart"
    />
    <div class="page-path__wrapper">
      <div class="page-path">Home / Cart</div>
    </div>
    <div class="page-name__wrapper">
      <div class="page-name">
        <h1>Cart</h1>
        <empty-cart-button @on-click-show-popup="onClickShowPopup" />
      </div>
    </div>
    <shopping-card-list
      :shopping-cart-data="shoppingCartData"
      @onDeleteItem="onDeleteItem"
    />
  </div>
</template>

<script>
import ShoppingCardList from '@/components/ShoppingCardList/ShoppingCardList';
import shoppingCartMock from './ShoppingCardMock.json';
import EmptyCartButton from '@/components/EmptyCartButton/EmptyCartButton';
import EmptyCartPopup from '@/components/EmptyCartPopup/00EmptyCartPopup';

export default {
  name: 'ShoppingCartPage',

  components: { ShoppingCardList, EmptyCartButton, EmptyCartPopup },

  data: function () {
    return {
      shoppingCartData: shoppingCartMock,
      isPopupVisible: false
    };
  },

  methods: {
    onDeleteItem(index) {
      this.shoppingCartData = this.shoppingCartData
        .slice(0, index)
        .concat(this.shoppingCartData.slice(index + 1));
    },

    onClickShowPopup() {
      this.isPopupVisible = true;
    },

    onClickClosePopup() {
      this.isPopupVisible = false;
    },

    onClickClearShoppingCart: function () {
      this.shoppingCartData = [];
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

h1 {
  color: $font-color-subtitle;
  font-weight: normal;
}

.page-name__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
}

.page-name {
  color: $font-color-subtitle;
  display: flex;
  width: 70%;
  max-width: 800px;
  justify-content: space-between;
}

.page-path__wrapper {
  display: flex;
  justify-content: center;
}

.page-path {
  display: flex;
  width: 70%;
  max-width: 800px;
  color: $font-color-subtitle;
  margin-top: 10px;
  justify-content: flex-start;
}

@media screen and (max-width: $tablet-size) {
  .page-name__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
  }

  .page-name {
    color: $font-color-subtitle;
    display: flex;
    max-width: 800px;
    justify-content: space-between;
    align-items: center;
  }

  .page-path__wrapper {
    display: flex;
    justify-content: center;
  }

  .page-path {
    display: flex;
    width: 70%;
    max-width: 800px;
    color: $font-color-subtitle;
    margin-top: 10px;
    justify-content: flex-start;
  }
}
</style>
