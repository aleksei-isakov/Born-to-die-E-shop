<template>
  <div class="plp-search-bar">
    <SelectField :categories="categories" @category-change="onCategoryChange" />
    <SearchField
      @search="onSearch"
      placeHolder="Search by product name/description"
    />
  </div>
</template>

<script>
import SearchField from './SearchField.vue';
import SelectField from './SelectField.vue';
import categoriesMock from './categoriesMock.json';

export default {
  name: 'PLPSearchBar',

  components: {
    SearchField,
    SelectField
  },

  data() {
    return {
      categories: categoriesMock
    };
  },

  methods: {
    onSearch(inputValue) {
      this.$emit('search', inputValue);
    },

    onCategoryChange(category) {
      this.$emit('category-changed', category);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.plp-search-bar {
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center;
  margin: 200px 0px;
}

@media screen and (max-width: $mobile-size) {
  .plp-search-bar {
    flex-direction: column-reverse;
    height: auto;
    align-items: center;
  }
}
</style>
