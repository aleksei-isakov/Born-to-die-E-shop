<template>
  <div class="plp-search-bar">
    <select-field :categories="categories" />
    <search-field
      place-holder="Search by product name/description"
      @search="onSearch"
    />
  </div>
</template>

<script>
import SearchField from './SearchField.vue';
import SelectField from './SelectField.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'PLPSearchBar',

  components: {
    SearchField,
    SelectField
  },

  computed: {
    ...mapGetters('PlpPageModule', ['categories'])
  },

  methods: {
    onSearch(inputValue) {
      this.$emit('search', inputValue);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.plp-search-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 20px 0;
}

@media screen and (max-width: $mobile-size) {
  .plp-search-bar {
    flex-direction: column;
    align-items: center;
  }
}
</style>
