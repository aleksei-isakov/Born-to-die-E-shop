<template>
  <div class="group">
    <div class="group__title">
      <input v-model="isGroupChecked" type="checkbox" class="group__checkbox" />
      <h2>{{ seller.name }}</h2>
    </div>
    <div class="group__list">
      <shopping-cart-item
        v-for="cartItem in products"
        :id="cartItem.id"
        :key="cartItem.id"
        :name="cartItem.name"
        :quantity="cartItem.quantity"
        :price="cartItem.price"
        :discount-percentage="cartItem.discountPercentage"
        :price-with-discount="cartItem.priceWithDiscount"
        :images="cartItem.images"
        :is-checked="cartItem.checked"
      />
    </div>
  </div>
</template>

<script>
import ShoppingCartItem from '@/components/ShoppingCartItem/ShoppingCartItem';
import { mapActions } from 'vuex';

export default {
  name: 'ShoppingCartGroup',

  components: { ShoppingCartItem },

  props: {
    seller: {
      type: Object,
      default: () => {},
      required: true
    },

    products: {
      type: Array,
      default: () => [],
      required: true
    }
  },

  computed: {
    isGroupChecked: {
      get() {
        return this.products.every(({ checked }) => checked);
      },

      set(value) {
        this.products.forEach(({ checked, id }) => {
          if (checked !== value) {
            value ? this.checkCartItem(id) : this.uncheckCartItem(id);
          }
        });
      }
    }
  },

  methods: {
    ...mapActions('ShoppingCartModule', ['uncheckCartItem', 'checkCartItem'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

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
    padding-left: 30px;
  }
}
</style>
