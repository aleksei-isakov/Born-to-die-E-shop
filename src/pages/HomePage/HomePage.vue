<template>
  <div>
    <PLPSearchBar />
    <ProductsList
      :products="productsList"
      :items-per-page="itemsPerPage"
      :is-horizontal="false"
    />
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import PLPSearchBar from '@/components/PLPSearchBar/PLPSearchBar.vue';
import { mapGetters, mapActions } from 'vuex';
const ITEMS_PER_PAGE = 5;

export default {
  name: 'HomePage',

  components: {
    ProductsList,
    PLPSearchBar
  },

  data() {
    return {
      itemsPerPage: ITEMS_PER_PAGE
    };
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
