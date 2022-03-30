<template>
  <div v-if="isShown" class="breadcrumbs__wrapper page-container">
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
    },

    isShown() {
      return this.$route.name !== 'Home';
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
  ul {
    padding-left: 0;
  }
}

.breadcrumbs__wrapper {
  text-decoration: none;
}

.breadcrumbs__wrapper::v-deep a:hover {
  text-decoration: none;
}

.breadcrumb__text {
  color: $font-color-text;
}
</style>
