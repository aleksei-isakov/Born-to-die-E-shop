<template>
  <div class="plp-search-bar">
    <SelectField :categories="this.categories" @change="onChangeCategory" />
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

    onChangeCategory(category) {
      this.$emit('category-changed', category);
    }
  }
};
</script>

<style scoped>
.plp-search-bar {
  width: 100%;
  height: 7vh;
  display: flex;
  justify-content: center;
  margin: 20px 0px;
}
</style>
