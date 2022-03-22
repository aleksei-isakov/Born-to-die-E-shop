<template>
  <div class="shoppingCard__wrapper">
    <img :src="getImage" class="cart-item-img" />
    <div class="shopping-cart-item-description">{{ description }}</div>
    <div class="product-price">{{ getPrice }} $</div>
    <quantity-counter :quantity="quantity" />
    <shopping-cart-trash-icon @delete-item="deleteFromCart(id)" />
  </div>
</template>

<script>
import defaultImage from '@/assets/defaultImage.jpg';
import QuantityCounter from '@/components/ShoppingCardItem/QuantityCounter';
import ShoppingCartTrashIcon from '@/components/ShoppingCartTrashIcon/ShoppingCartTrashIcon.vue';
import { mapActions } from 'vuex';

export default {
  name: 'ShoppingCardItem',

  components: { QuantityCounter, ShoppingCartTrashIcon },

  props: {
    image: {
      type: String,
      require: true,
      default: defaultImage
    },

    index: {
      type: Number,
      require: true,
      default: 0
    },

    id: {
      type: String,
      require: true,
      default: ''
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
    ...mapActions('ShoppingCartModule', ['deleteFromCart'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.cart-item-img {
  align-content: flex-start;
}

.shopping-cart-item-description {
  margin-right: 10px;
  max-width: 300px;
}

.shoppingCard__wrapper {
  width: 80%;
  display: inline-flex;
  color: $font-color-text;
  max-width: 800px;
  align-items: center;
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

.delete-icon {
  cursor: pointer;
}

@media screen and (max-width: $tablet-size) {
  .shoppingCard__wrapper {
    width: 99%;
    padding: 10px;
  }

  .product-price {
    font-size: 1.3rem;
    color: $font-color-subtitle;
  }

  .cart-item-img {
    max-width: 100px;
  }
}
</style>
