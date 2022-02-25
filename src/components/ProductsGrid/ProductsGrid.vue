<template>
  <div class="product-grid__wrapper">
    <div class="product-grid__header">
      <p class="found-items-count">Found: {{ foundProducts }}</p>

      <select class="product-grid__header__selector">
        <option disabled>Number of items displayed</option>
        <option value="10">Show 10 items</option>
        <option value="20">Show 20 items</option>
        <option value="30">Show 30 items</option>
        <option value="50">Show 50 items</option>
        <option value="100">Show 100 items</option>
      </select>
    </div>

    <div class="product-grid__container">
      <product-item
        v-for="product of totalProductsOnPage"
        :key="product.id"
        :props="product"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductsList/ProductItem';
export default {
  name: 'ProductsGrid',

  components: {
    ProductItem
  },

  props: {
    products: {
      type: Array,
      default: () => []
    },

    itemsPerPage: {
      type: Number,
      default: 20
    }
  },

  computed: {
    totalProductsOnPage() {
      return this.products.slice(0, this.itemsPerPage);
    },

    foundProducts() {
      return `${this.products.length} ${
        this.products.length === 1 ? 'item' : 'items'
      }`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.product-grid__wrapper {
  display: flex;
  flex-direction: column;
  text-align: start;
  min-width: 770px;
  max-width: 1250px;
  height: 100%;
  margin-bottom: 35px;
}

.product-grid__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.product-grid__header {
  display: flex;
  justify-content: space-between;
}

.product-grid__header__selector {
  border-radius: 4%;
  height: 30px;
  text-align: right;
  border-bottom: 1px solid gray;
  margin: -4px 30px 0 0;
}

@media (max-width: $tablet-size) {
  .product-grid__wrapper {
    min-width: 200px;
    max-width: 560px;
  }

  .product-grid__container {
    justify-content: space-around;
  }
}
</style>
