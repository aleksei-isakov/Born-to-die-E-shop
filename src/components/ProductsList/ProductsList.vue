<template>
  <div class="container">
    <div
      class="products-list"
      :class="{ 'products-list--horizontal': isHorizontal }"
    >
      <RecentlyAdded text="Recently added" />
      <FoundProducts :items-total-count="products.length" />
      <ul class="products-list__items">
        <ProductItem
          v-for="product in countProductsQuantity"
          :key="product.id"
          :image="product.image"
          :price="product.price"
          :description="product.description"
          :is-horizontal="isHorizontal"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import RecentlyAdded from './RecentlyAdded.vue';
import FoundProducts from './FoundProducts.vue';

export default {
  name: 'ProductsList',

  components: {
    ProductItem,
    RecentlyAdded,
    FoundProducts
  },

  props: {
    products: {
      type: Array,
      default: () => []
    },

    itemsPerPage: {
      type: Number,
      required: true,
      default: 5
    },

    isHorizontal: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
    countProductsQuantity() {
      return this.products.slice(0, this.itemsPerPage);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 15vw;

  .products-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 5vw;

    &__items {
      width: 100%;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, max-content));
      column-gap: 5vw;
      row-gap: 55px;
    }

    &--horizontal {
      width: 100%;
      margin-left: 0;

      .products-list__items {
        grid-template-columns: 1fr;

        @media screen and (min-width: 1600px) {
          grid-template-columns: 1fr 1fr;
        }
      }
    }
  }
}
</style>
