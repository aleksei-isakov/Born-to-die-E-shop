<template>
  <div class="shoppingCard__wrapper">
    <img :src="getImage" class="cart-item-img" />
    <div class="shopping-cart-item-description">{{ description }}</div>
    <div class="product-price">{{ getPrice }} $</div>
    <div class="quantity__wrapper">
      <BaseTextFilledButton @click="onClickCountDown">-</BaseTextFilledButton>
      <input v-model="quantity" readonly class="quantity-field" />
      <BaseTextFilledButton @click="onClickCountUp">+</BaseTextFilledButton>
    </div>
    <div>
      <v-icon class="delete-icon" @click="onDeleteItem">fas fa-trash</v-icon>
    </div>
  </div>
</template>

<script>
import defaultImage from '@/assets/defaultImage.jpg';
import { BaseTextFilledButton } from '@/base_components';

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
    onClickCountUp() {
      this.$emit('quantityUp');
    },

    onClickCountDown() {
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
  display: inline-flex;
  color: $font-color-text;
  max-width: 800px;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
  justify-content: space-between;
  border: 1px solid #e4e4e4ff;
  box-shadow: 0 3px 2px -2px gray;
  padding: 10px;
}

.product-price {
  font-size: 1.5rem;
  color: $font-color-subtitle;
}

.quantity__wrapper {
  width: 30%;
  display: inline-flex;
  flex-grow: 0;
  justify-content: flex-end;
}

.quantity-field {
  width: 60px;
  text-align: center;
  border: 2px solid #e4e4e4ff;
}

.delete-icon {
  cursor: pointer;
}

@media screen and (max-width: $tablet-size) {
  .shoppingCard__wrapper {
    width: 99%;
    padding: 10px;
  }

  .quantity__wrapper {
    width: auto;
  }

  .quantity-field {
    width: 30px;
  }

  .shopping-cart-item-description {
    margin-right: 15px;
  }

  .cart-item-img {
    max-width: 100px;
  }
}
</style>
