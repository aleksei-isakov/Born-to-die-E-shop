<template>
  <div class="search-field">
    <input
      v-model="inputValue"
      class="search-field__input"
      :placeholder="placeHolder"
      @keypress.enter="onClickSearch"
    />
    <BaseButton class="search-field__btn" @click="onClickSearch">
      <BaseCustomIcon :icon="searchIcon" :width="searchIconWidth" />
    </BaseButton>
  </div>
</template>

<script>
import { BaseButton, BaseCustomIcon } from '@/base_components';

export default {
  name: 'SearchField',

  components: {
    BaseButton,
    BaseCustomIcon
  },

  props: {
    placeHolder: {
      type: String,
      default: '',
      required: true
    }
  },

  data() {
    return {
      searchIcon: 'search_icon',
      searchIconWidth: '50%',
      inputValue: ''
    };
  },

  methods: {
    onClickSearch() {
      this.$emit('search', this.inputValue.trim());
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.search-field {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  height: 7vh;
  @media screen and (max-width: $mobile-size) {
    width: 100%;
  }
}

.search-field__input {
  width: 100%;
  border: 1px solid rgb(211, 210, 210);
  border-radius: 5px 0 0 5px;
  display: flex;
  justify-content: flex-end;
  padding-left: 10px;
}

.search-field__btn {
  width: 5vw;
  min-width: 50px;
  height: 100%;
  border: none;
  background-color: $primary;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
</style>
