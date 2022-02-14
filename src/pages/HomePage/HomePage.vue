<template>
  <div>
    <PLPSearchBar />
    <ProductsList />
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import PLPSearchBar from '@/components/PLPSearchBar/PLPSearchBar.vue';

export default {
  name: 'HomePage',

  components: {
    ProductsList,
    PLPSearchBar
  }
};
</script>
