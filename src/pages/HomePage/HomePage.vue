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
import { mapActions, mapGetters } from 'vuex';

const ITEMS_PER_PAGE = 5;
const DESCENDING = 'desc';
const CREATING_DATE = 'createdAt';

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
    await this.getProductsList({
      _limit: ITEMS_PER_PAGE,
      _sort: CREATING_DATE,
      _order: DESCENDING
    });
  },

  methods: {
    ...mapActions('ProductsModule', ['getProductsList'])
  }
};
</script>
