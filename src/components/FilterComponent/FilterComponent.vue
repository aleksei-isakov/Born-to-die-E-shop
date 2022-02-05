<template>
  <div class="filter-wrapper">
    <div class="filter-block">
      <div
        class="filter-block__item"
        v-for="(iconPath, i) in iconsPath"
        :key="i"
        @click="selectedIconPath = iconPath"
        v-bind:class="{ active: selectedIconPath === iconPath }"
      >
        <img
          class="filter-block__icon"
          :src="require(`@/assets/Icons/${iconPath}`)"
          alt="icon"
        />
      </div>
    </div>

    <div>
      <p class="title">Filter</p>
      <div class="custom-select">
        <div
          class="custom-select__selected"
          @click="isOptionsVisible = !isOptionsVisible"
        >
          {{ selected }}
          <p>
            <i
              class="arrow"
              v-bind:class="{
                arrow__up: isOptionsVisible,
                arrow__down: !isOptionsVisible
              }"
            ></i>
          </p>
        </div>

        <div class="custom-select__options" v-if="isOptionsVisible">
          <p
            class="custom-select__option"
            v-for="(option, i) in options"
            :key="i"
            @click="onClickSelectOption(option)"
          >
            {{ option }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterComponent',

  data() {
    return {
      isOptionsVisible: false,
      options: [
        'From new to old',
        'From old to new',
        'From cheap to expensive',
        'From expensive to cheap'
      ],
      // late move "selected" to the main component
      selected: 'From new to old'
    };
  },

  props: {
    iconsPath: {
      type: Array,
      default: null
    },

    selectedIconPath: {
      type: String,
      default: ''
    }
  },

  methods: {
    onClickSelectOption(value) {
      this.$emit('onClickSelectOption', value);
      this.selected = value;
      this.isOptionsVisible = false;
    },

    onHideSelect(e) {
      if (
        !document.querySelector('.custom-select__selected').contains(e.target)
      ) {
        this.isOptionsVisible = false;
      }
    }
  },

  mounted() {
    document.addEventListener('click', this.onHideSelect.bind(this), true);
  },

  beforeDestroy() {
    document.removeEventListener('click', this.onHideSelect);
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/variables.scss';
// remove '*' to the main file
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.filter-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100px;
  color: $font-color-title;
}

.filter-block {
  display: flex;
  border: 2px solid #e6e6e6;
  border-radius: 10px;
  margin-right: 30px;
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
  &__icon {
    width: 50%;
    height: auto;
  }
}

.active {
  background-color: #e6e6e6;
}

.title {
  text-align: left;
  color: $font-color-text;
}

.custom-select {
  display: block;
  position: relative;
  width: 280px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  text-align: left;
  cursor: pointer;
  &__selected {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 15px;
    width: 100%;
    height: 30px;
    & p {
      position: absolute;
      right: 10px;
    }
  }
  &__options {
    position: absolute;
    margin-top: 4px;
    width: 100%;
    height: 117px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    padding: 0px 15px;
  }
  &__option {
    line-height: 27px;
  }
  &__option:hover {
    background-color: #e6e6e6;
    transition: 0.5s;
  }
  .arrow {
    border: solid black;
    border-width: 0 1.5px 1.5px 0;
    display: inline-block;
    padding: 3px;
    &__up {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }
    &__down {
      margin-bottom: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
}
</style>
