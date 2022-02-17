<template>
  <div class="container">
    <div
      class="products-list"
      :class="{ 'products-list--horizontal': isHorizontal }"
    >
      <RecentlyAdded text="Recently added" />
      <FoundProducts :items-per-page="itemsPerPage" />
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
import products from './productsMock.json';
import FoundProducts from './FoundProucts.vue';

for (let product of products) {
  if (product.description) {
    product.description.created = new Date(product.description.created);
    product.description.updated = new Date(product.description.updated);
  }
}

export default {
  name: 'ProductsList',

  components: {
    ProductItem,
    RecentlyAdded,
    FoundProducts
  },

  props: {
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

  data() {
    return {
      products: products
    };
  },

  computed: {
    countProductsQuantity() {
      return this.products.slice(0, this.itemsPerPage);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

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
