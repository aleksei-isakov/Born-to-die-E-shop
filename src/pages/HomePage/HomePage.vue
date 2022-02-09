<template>
  <div>
    <Header />
    <ProductsList />
    <Footer />
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import Header from '../../components/Header/Header.vue';
import Footer from '../../components/Footer/Footer.vue';

export default {
  name: 'HomePage',

  components: {
    ProductsList,
    Header,
    Footer
  }
};
</script>
