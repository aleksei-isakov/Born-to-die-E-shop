<template>
  <div class="cart__wrapper">
    <div class="shopping-cart__wrapper">
      <shopping-card-item
        v-for="(cartItem, i) in shoppingCartData"
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
    getTotalPrice() {
      let totalPrice = 0;

      if (this.shoppingCartData.length === 0) return 0;
      totalPrice = this.shoppingCartData.map((product) => {
        return product.price * product.quantity;
      });

      return totalPrice.reduce((acc, _) => acc + _);
    }
  },

  methods: {
    onDeleteItem(index) {
      this.shoppingCartData.splice(index, 1);
    },

    quantityUp(i) {
      return this.shoppingCartData[i].quantity++;
    },

    quantityDown(i) {
      if (this.shoppingCartData[i].quantity <= 1) {
        return;
      }

      return this.shoppingCartData[i].quantity--;
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
