<template>
  <div class="breadcrumbs__wrapper">
    <v-breadcrumbs :items="breadCrumbs">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :to="item.to" exact>
          <span class="breadcrumb__text">{{ item.text }}</span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Breadcrumbs',

  computed: {
    ...mapGetters('PdpPageModule', ['productInfo']),

    breadCrumbs() {
      if (typeof this.$route.meta.breadCrumb === 'function') {
        let result = this.$route.meta.breadCrumb.call(this, this.$route);

        return result.map((res) => {
          if (res.params) {
            res.text = this.productInfo.name;

            return res;
          }

          return res;
        });
      }

      return this.$route.meta.breadCrumb;
    }
  },

  async mounted() {
    if (this.$route.params.id) {
      await this.getProductInfo(this.$route.params.id);
    }
  },

  methods: {
    ...mapActions('PdpPageModule', ['getProductInfo'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.breadcrumbs__wrapper {
  padding: 0 15vw;
  text-decoration: none;
}

.breadcrumbs__wrapper::v-deep a:hover {
  text-decoration: none;
}

.breadcrumb__text {
  color: $font-color-text;
}
</style>
