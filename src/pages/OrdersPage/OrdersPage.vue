<template>
  <div></div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'OrdersPage',

  computed: {
    ...mapGetters('OrdersModule', ['ordersList'])
  },

  async mounted() {
    await this.getOrdersList();
  },

  methods: {
    ...mapActions('OrdersModule', ['getOrdersList'])
  }
};
</script>
