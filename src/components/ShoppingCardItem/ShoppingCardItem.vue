<template>
  <div class="shoppingCard__wrapper">
    <img :src="getImage" class="cart-item-img" />
    <div class="shopping-cart-item-description">{{ description }}</div>
    <div class="product-price">{{ getPrice }} $</div>
    <div class="quantity__wrapper">
      <BaseTextFilledButton @click="onCountUp">+</BaseTextFilledButton>
      <input v-model="quantity" readonly class="quantity-filed" />
      <BaseTextFilledButton @click="onCountDown">-</BaseTextFilledButton>
    </div>
    <div>
      <md-icon class="delete-icon" @click.native="onDeleteItem">delete</md-icon>
    </div>
  </div>
</template>

<script>
import defaultImage from '@/assets/defaultImage.jpg';
import { BaseTextFilledButton } from '@/base_components';
import Vue from 'vue';
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

export default {
  name: 'ShoppingCardItem',

  components: { BaseTextFilledButton },

  props: {
    image: {
      type: String,
      require: true,
      default: defaultImage
    },

    description: {
      type: String,
      require: true,
      default: ''
    },

    quantity: {
      type: Number,
      require: true,
      default: 1
    },

    price: {
      type: Number,
      require: true,
      default: 0
    }
  },

  computed: {
    getImage() {
      return this.image ? this.image : defaultImage;
    },

    getPrice() {
      return this.price * this.quantity;
    }
  },
  methods: {
    onCountUp() {
      this.$emit('quantityUp');
    },

    onCountDown() {
      this.$emit('quantityDown');
    },

    onDeleteItem() {
      this.$emit('onDeleteItem');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.cart-item-img {
  align-content: flex-start;
}

.shoppingCard__wrapper {
  width: 70%;
  margin-top: 20px;
  display: inline-flex;
  color: #b3b4b6;
  max-width: 800px;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
  border: 1px solid rgb(228, 228, 228);
  box-shadow: 0 3px 2px -2px gray;
}

.product-price {
  font-size: 1.5rem;
  color: #2c2c2c;
}

.quantity__wrapper {
  width: 30%;
  display: inline-flex;
  flex-grow: 0;
  justify-content: flex-end;
}

.quantity-filed {
  width: 60px;
  text-align: center;
  border: 2px solid rgb(228, 228, 228);
}

.delete-icon {
  max-width: 20px;
  margin-right: 10px;
  cursor: pointer;
}

@media screen and (max-width: $tablet-size) {
  .shoppingCard__wrapper {
    width: 99%;
    margin-top: 10px;
    display: inline-flex;
    color: #b3b4b6;
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
    border: 1px solid rgb(228, 228, 228);
    box-shadow: 0 3px 2px -2px gray;
  }

  .product-price {
    font-size: 1.5rem;
    color: #2c2c2c;
  }

  .quantity__wrapper {
    width: auto;
    display: inline-flex;
    flex-grow: 0;
    justify-content: flex-end;
  }

  .quantity-filed {
    width: 30px;
    text-align: center;
    border: 2px solid rgb(228, 228, 228);
  }

  .shopping-cart-item-description {
    margin-right: 15px;
  }

  .cart-item-img {
    max-width: 100px;
  }

  .delete-icon {
    max-width: 20px;
    margin-right: 5px;
    cursor: pointer;
  }
}
</style>
