<template>
  <div>
    <button
      class="select-field"
      @click="onClickToggleDropdown"
      @blur="onBlurCloseDropdown"
    >
      <div class="select-field__category">Category</div>
      <div>{{ changedCategory }}</div>
      <img
        class="select-field__arrow-icon"
        :src="arrowIcon"
        alt="arrow-icon"
        :class="{ reverse: isDropdownOpen }"
      />
    </button>
    <ul class="dropdown" :class="{ open: isDropdownOpen }">
      <li
        v-for="(category, i) in categories"
        :key="category"
        @mousedown="onClickChange(i)"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import arrowIcon from '@/assets/Icons/arrow.svg';

export default {
  name: 'SelectField',

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
      changedCategory: this.categories[0]
    };
  },

  methods: {
    onClickToggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },

    onBlurCloseDropdown() {
      this.isDropdownOpen = false;
    },

    onClickChange(i) {
      this.changedCategory = this.categories[i];
      this.$emit('category-change', this.categories[i]);
    }
  }
};
</script>

<style scoped>
.select-field {
  margin-right: 20px;
  width: 15vw;
  min-width: 120px;
  height: 7vh;
  background-color: white;
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
  background-color: white;
  color: #b3b4b6;
  padding: 0 5px 0 5px;
  position: absolute;
  top: -8px;
  left: 10px;
  font-size: 12px;
}

.dropdown {
  background-color: white;
  border: 1px solid rgb(211, 210, 210);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 15vw;
  margin: 5px 0 0 0;
  opacity: 0;
  transition: all 0.4s ease;
  height: 0px;
  min-width: 120px;
  max-height: 300px;
  overflow: auto;
  position: relative;
  z-index: 2;
}

@media screen and (max-width: 500px) {
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
