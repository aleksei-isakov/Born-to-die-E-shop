<template>
  <div class="cart__wrapper">
    <div class="page-path">Home / Cart</div>
    <div class="page-name">Cart</div>
    <div class="shopping-cart__wrapper">
      <shopping-card-item
        v-for="(cartItem, i) in cardsItems"
        :key="i"
        :description="cartItem.description"
        :quantity="cartItem.quantity"
        :price="cartItem.price"
        @onDeleteItem="onDeleteItem(i)"
        @quantityUp="quantityUp(i)"
        @quantityDown="quantityDown(i)"
      />
    </div>
    <div class="total-price">Total Price: {{ getTotalPrice }} $</div>
  </div>
</template>

<script>
import ShoppingCardItem from '@/components/ShoppingCardItem/ShoppingCardItem';
import shoppingCartMock from './ShoppingCardMock.json';

export default {
  name: 'ShoppingCardList',

  components: { ShoppingCardItem },

  data: () => ({
    cardsItems: shoppingCartMock
  }),

  computed: {
    getTotalPrice() {
      let totalPrice = 0;

      if (this.cardsItems.length === 0) return 0;
      totalPrice = this.cardsItems.map((product) => {
        return product.price * product.quantity;
      });

      return totalPrice.reduce((acc, _) => acc + _);
    }
  },

  methods: {
    onDeleteItem(index) {
      this.cardsItems.splice(index, 1);
      console.log(this.cardsItems);
    },

    quantityUp(i) {
      return this.cardsItems[i].quantity++;
    },

    quantityDown(i) {
      if (this.cardsItems[i].quantity <= 1) {
        return;
      }

      return this.cardsItems[i].quantity--;
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
}

.total-price {
  margin-right: 50rem;
  margin-top: 40px;
  color: #929298;
  font-size: 1.1rem;
}

.cart__wrapper {
  display: flex;
  flex-direction: column;
}

.page-name {
  margin-right: 50rem;
  color: #929298;
  font-size: 2.2rem;
}

.page-path {
  margin-right: 50rem;
  color: #929298;
  margin-top: 10px;
}

@media screen and (max-width: $tablet-size) {
  .shopping-cart__wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .total-price {
    margin-top: 40px;
    color: #929298;
    font-size: 1.1rem;
    width: 150px;
  }

  .cart__wrapper {
    display: flex;
    flex-direction: column;
  }

  .page-name {
    margin-right: 30rem;
    color: #929298;
    font-size: 2.2rem;
    width: 30%;
  }

  .page-path {
    margin-right: 30rem;
    color: #929298;
    margin-top: 20%;
    width: 30%;
  }
}
</style>
