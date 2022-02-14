<template>
  <div class="search-field">
    <input
      class="search-field__input"
      :placeholder="placeHolder"
      v-model="inputValue"
      @keypress.enter="onClickSearch"
    />
    <BaseButton class="search-field__btn" @click="onClickSearch">
      <BaseCustomIcon :icon="searchIcon" :width="searchIconWidth" />
    </BaseButton>
  </div>
</template>

<script>
import { BaseButton } from '@/base_components';
import BaseCustomIcon from '@/base_components/BaseCustomIcon/BaseCustomIcon.vue';

export default {
  name: 'SearchField',

  data() {
    return {
      searchIcon: 'search_icon',
      searchIconWidth: '50%',
      inputValue: ''
    };
  },

  props: {
    placeHolder: {
      type: String,
      default: '',
      required: true
    }
  },

  components: {
    BaseButton,
    BaseCustomIcon
  },

  methods: {
    onClickSearch() {
      const isNotEmpty = this.inputValue.trim().length > 0;

      if (isNotEmpty) {
        this.$emit('search', this.inputValue);
      }
    }
  }
};
</script>

<style scoped>
.search-field {
  width: 50vw;
  height: 7vh;
  display: flex;
  justify-content: center;
}

.search-field__input {
  width: 100%;
  border: 1px solid rgb(211, 210, 210);
  border-radius: 5px 0 0 5px;
  display: flex;
  justify-content: end;
  padding-left: 10px;
}

@media screen and (max-width: 500px) {
  .search-field {
    width: 90vw;
    margin-bottom: 10px;
  }
}

.search-field__btn {
  width: 5vw;
  min-width: 50px;
  height: 100%;
  border: none;
  background-color: #1876d1;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
</style>
