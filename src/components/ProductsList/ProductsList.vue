<template>
  <div class="products-list">
    <div
      :class="[
        { 'products-list__content_horizontal': isHorizontal },
        'products-list__content'
      ]"
    >
      <RecentlyAdded text="Recently added" />
      <FoundProducts :items-total-count="itemsTotalCount" />
      <ul class="products-list__items">
        <ProductItem
          v-for="product in countProductsQuantity"
          :key="product.id"
          :image="getProductImage(product)"
          :price="product.price"
          :title="product.name"
          :created="product.createdAt"
          :updated="product.updatedAt"
          :is-horizontal="isHorizontal"
          description=""
          :category="getCategoryName(product)"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import RecentlyAdded from './RecentlyAdded.vue';
import FoundProducts from './FoundProducts.vue';
const DEFAULT_PRODUCTS = 5;

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
      required: true,
      default: () => []
    },

    itemsPerPage: {
      type: Number,
      required: true,
      default: DEFAULT_PRODUCTS
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
    },

    itemsTotalCount() {
      return this.products?.length;
    }
  },

  methods: {
    getCategoryName(product) {
      return product.category ? product.category.name : null;
    },

    getProductImage(product) {
      return product.images ? product.images[0] : null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.products-list {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 15vw;

  .products-list__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 5vw;
  }

  .products-list__items {
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, max-content));
    grid-template-rows: 1fr;
    column-gap: 5vw;
    row-gap: 55px;
  }

  .products-list__content_horizontal {
    width: 100%;
    margin-left: 0;

    .products-list__items {
      grid-template-columns: 1fr;
      grid-auto-rows: 1fr;
    }
  }
}
</style>
