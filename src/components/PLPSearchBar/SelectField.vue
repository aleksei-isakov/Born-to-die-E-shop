<template>
  <div>
    <button class="select-field" @click="toggleDropdown" @blur="closeDropdown">
      <div class="select-field__category">Category</div>
      <div>{{ this.changeCategory }}</div>
      <img
        class="select-field__arrow-icon"
        :src="arrowIcon"
        alt="arrow-icon"
        :class="{ reverse: dropdownIsOpen }"
      />
    </button>
    <ul class="dropdown" :class="{ open: dropdownIsOpen }">
      <li
        v-for="(category, i) in categories"
        :key="category"
        @click="change(i)"
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
      default: () => {}
    }
  },

  data() {
    return {
      arrowIcon: arrowIcon,
      dropdownIsOpen: false,
      changeCategory: this.categories[0]
    };
  },

  methods: {
    toggleDropdown() {
      this.dropdownIsOpen = !this.dropdownIsOpen;
    },

    closeDropdown() {
      this.dropdownIsOpen = false;
    },

    change(i) {
      this.changeCategory = this.categories[i];
      this.$emit('change', this.categories[i]);
    }
  }
};
</script>

<style scoped>
.select-field {
  margin-right: 20px;
  width: 15vw;
  min-width: 100px;
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

.chosen {
  border: 1px solid blue;
}
</style>
