<template>
  <div class="search-field">
    <input
      class="search-field__input"
      :placeholder="placeHolder"
      :value="inputValue"
      @input="changeInputValue"
      @keypress.enter="search"
    />
    <button class="search-field__btn" @click="search">
      <img :src="searchIcon" alt="search-icon" />
    </button>
  </div>
</template>

<script>
import searchIcon from '@/assets/Icons/search_icon.svg';

export default {
  name: 'SearchField',

  props: {
    placeHolder: {
      type: String,
      default: '',
      required: true
    }
  },

  data() {
    return {
      searchIcon: searchIcon,
      inputValue: ''
    };
  },

  methods: {
    search() {
      const isNotEmpty = this.inputValue.trim().length > 0;

      if (isNotEmpty) {
        this.$emit('search', this.inputValue);
      }
    },

    changeInputValue(event) {
      this.inputValue = event.target.value;
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
