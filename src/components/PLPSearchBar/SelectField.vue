<template>
  <div>
    <button
      class="select-field"
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
    <ul class="dropdown" :class="{ open: isDropdownOpen }">
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

.select-field {
  margin-right: 20px;
  width: 15vw;
  min-width: 120px;
  height: 7vh;
  background-color: $white;
  border: 1px solid rgb(211, 210, 210);
  border-radius: 5px;
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

.dropdown {
  background-color: $white;
  border: 1px solid rgb(211, 210, 210);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 15vw;
  margin: 5px 0 0 0;
  opacity: 0;
  transition: $transition;
  height: 0px;
  min-width: 120px;
  max-height: 300px;
  overflow: auto;
  position: relative;
  z-index: 2;
}

@media screen and (max-width: $mobile-size) {
  .dropdown {
    width: 90vw;
    position: absolute;
  }
  .select-field {
    width: 90vw;
    margin: 0;
  }
}

.dropdown li {
  padding: 10px 10px;
  list-style: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
}

.dropdown li:hover {
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
