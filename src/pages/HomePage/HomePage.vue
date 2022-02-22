<template>
  <div>
    <PLPSearchBar />
    <ProductsList
      :products="productsList"
      :items-per-page="5"
      :is-horizontal="false"
    />
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

  async mounted() {
    await this.getProductsList();
  },

  computed: {
    ...mapGetters('ProductsModule', ['productsList'])
  },

  methods: {
    ...mapActions('ProductsModule', ['getProductsList'])
  }
};
</script>
