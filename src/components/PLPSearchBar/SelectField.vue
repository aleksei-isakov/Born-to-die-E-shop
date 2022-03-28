<template>
  <div class="select-field__wrapper">
    <button
      class="select-field__button"
      @click="onClickToggleDropdown"
      @blur="onBlurCloseDropdown"
    >
      <div class="select-field__category">Category</div>
      <div>{{ currentCategory }}</div>
      <img
        class="select-field__arrow-icon"
        :src="arrowIcon"
        alt="arrow-icon"
        :class="{ reverse: isDropdownOpen }"
      />
    </button>
    <ul class="select-field__dropdown" :class="{ open: isDropdownOpen }">
      <select-field-item
        v-for="(category, i) in categories"
        :key="i"
        :category="category"
        :index="i"
        @chooseItem="onChooseItem"
      />
    </ul>
  </div>
</template>

<script>
import arrowIcon from '@/assets/Icons/arrow.svg';
import SelectFieldItem from './SelectFieldItem.vue';
import { mapActions } from 'vuex';

export default {
  name: 'SelectField',

  components: {
    SelectFieldItem
  },

  props: {
    categories: {
      type: Array,
      required: true,
      default: () => []
    }
  },

  data() {
    return {
      arrowIcon: arrowIcon,
      isDropdownOpen: false,
      activeCategoryIndex: 0
    };
  },

  computed: {
    currentCategory() {
      return this.categories[this.activeCategoryIndex];
    }
  },

  methods: {
    ...mapActions('PlpPageModule', ['setCurrentCategory']),

    onClickToggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },

    onBlurCloseDropdown() {
      this.isDropdownOpen = false;
    },

    onChooseItem(index) {
      this.activeCategoryIndex = index;
      this.setCurrentCategory(this.currentCategory);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.select-field__wrapper {
  position: relative;
  flex-basis: 30%;
  min-width: 120px;
  flex-shrink: 0;

  @media screen and (max-width: $tablet-size) {
    width: 100%;
  }
}

.select-field__button {
  width: 100%;
  height: 7vh;
  background-color: $white;
  border: 1px solid rgb(211, 210, 210);
  border-radius: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  cursor: pointer;
}

.select-field__category {
  background-color: $white;
  color: #b3b4b6;
  padding: 0 5px 0 5px;
  position: absolute;
  top: -8px;
  left: 10px;
  font-size: 12px;
}

.select-field__dropdown {
  width: 100%;
  background-color: $white;
  border: 1px solid rgb(211, 210, 210);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 5px 0 0 0;
  opacity: 0;
  transition: $transition;
  height: 0px;
  min-width: 120px;
  max-height: 300px;
  overflow: auto;
  position: absolute;
  z-index: 2;
}

.select-field__dropdown li {
  width: 100%;
  padding: 10px;
  list-style: none;
  text-align: left;
  cursor: pointer;
}

.select-field__dropdown li:hover {
  background-color: rgb(238, 237, 237);
}

.select-field__arrow-icon {
  width: 10px;
  justify-self: right;
}

.open {
  height: fit-content;
  opacity: 1;
}

.reverse {
  transform: rotateX(180deg);
}
</style>
