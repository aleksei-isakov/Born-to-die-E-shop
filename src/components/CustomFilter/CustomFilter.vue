<template>
  <div class="filter-wrapper">
    <div class="filter-block">
      <div
        v-for="(iconPath, i) in iconsPath"
        :key="i"
        class="filter-block__item"
        :class="{ active: selectedIconPath === iconPath }"
        @click="onClickSelectIconPath(iconPath)"
      >
        <BaseCustomIcon :icon="iconPath" :width="iconWidth" />
      </div>
    </div>

    <div class="custom-select-block">
      <p class="custom-select-block__title">Filter</p>
      <div class="custom-select">
        <div
          class="custom-select__selected"
          @click.stop="onClickChangeOptionsVisibility"
        >
          {{ activeOption }}
          <p>
            <i
              class="arrow"
              :class="{
                arrow__up: isOptionsVisible,
                arrow__down: !isOptionsVisible
              }"
            ></i>
          </p>
        </div>

        <div v-if="isOptionsVisible" class="custom-select__options">
          <p
            v-for="(option, i) in options"
            :key="i"
            class="custom-select__option"
            @click="onClickSelectOption(option.value)"
          >
            {{ option.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BaseCustomIcon } from '@/base_components';
import { ICON_WIDTH, SELECTED_OPTIONS_KEYS } from './helper';

export default {
  name: 'CustomFilter',

  components: {
    BaseCustomIcon
  },

  props: {
    selectedIconPath: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      isOptionsVisible: false,
      iconsPath: ['menu_filter_column', 'menu_filter_grid'],
      iconWidth: ICON_WIDTH,
      options: [
        {
          value: SELECTED_OPTIONS_KEYS.NEW_TO_OLD,
          name: 'From new to old'
        },
        {
          value: SELECTED_OPTIONS_KEYS.OLD_TO_NEW,
          name: 'From old to new'
        },
        {
          value: SELECTED_OPTIONS_KEYS.CHEAP_TO_EXPENSIVE,
          name: 'From cheap to expensive'
        },
        {
          value: SELECTED_OPTIONS_KEYS.EXPENSIVE_TO_CHEAP,
          name: 'From expensive to cheap'
        }
      ],
      selectedOption: SELECTED_OPTIONS_KEYS.NEW_TO_OLD
    };
  },

  computed: {
    activeOption() {
      return this.options.find(({ value }) => value === this.selectedOption)
        ?.name;
    }
  },

  mounted() {
    document.addEventListener('click', this.onHideSelect);
  },

  beforeDestroy() {
    document.removeEventListener('click', this.onHideSelect);
  },

  methods: {
    onClickSelectIconPath(iconPath) {
      this.$emit('click', iconPath);
    },

    onClickSelectOption(value) {
      this.$emit('onClickSelectOption', value);
      this.selectedOption = value;
      this.isOptionsVisible = false;
    },

    onClickChangeOptionsVisibility() {
      this.isOptionsVisible = !this.isOptionsVisible;
    },

    onHideSelect() {
      this.isOptionsVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.filter-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 50px;
  color: $font-color-title;
  padding: 0 15vw;

  @media screen and (max-width: $tablet-size) {
    justify-content: center;
  }
}

.filter-wrapper p {
  margin-bottom: 0;
}

.filter-block {
  display: flex;
  border: 2px solid $light-border-color;
  border-radius: 10px;
  margin-right: 30px;
  @media screen and (max-width: $tablet-size) {
    display: none;
  }
  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
  }
  &__icon {
    width: 50%;
    height: auto;
  }
}

.active {
  background-color: $light-border-color;
}

.custom-select-block__title {
  text-align: left;
  color: $font-color-text;
}

.custom-select {
  display: block;
  position: relative;
  width: 280px;
  border: 1px solid $light-border-color;
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
    padding: 0px 15px;
    width: 100%;
    height: 117px;
    border: 1px solid $light-border-color;
    border-radius: 5px;
    background-color: $white;
  }
  &__option {
    line-height: 27px;
  }
  &__option:hover {
    background-color: $light-border-color;
    transition: $transition;
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
