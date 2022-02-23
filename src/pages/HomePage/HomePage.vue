<template>
  <div>
    <PLPSearchBar />
    <ProductsList :products="productsList" />
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import PLPSearchBar from '@/components/PLPSearchBar/PLPSearchBar.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HomePage',

  components: {
    ProductsList,
    PLPSearchBar
  },

  computed: {
    ...mapGetters('ProductsModule', ['productsList'])
  },

  async mounted() {
    await this.getProductsList();
  },

  methods: {
    ...mapActions('ProductsModule', ['getProductsList'])
  }
};
</script>
