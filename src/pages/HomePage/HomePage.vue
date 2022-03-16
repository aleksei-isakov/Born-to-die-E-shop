<template>
  <div>
    <RecentlyAdded text="Recently added" />
    <ProductsList
      :products="productsList"
      :items-per-page="itemsPerPage"
      :is-horizontal="false"
    />
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import RecentlyAdded from '@/components/ProductsList/RecentlyAdded.vue';
import { mapGetters, mapActions } from 'vuex';
const ITEMS_PER_PAGE = 5;

export default {
  name: 'HomePage',

  components: {
    ProductsList,
    RecentlyAdded
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
