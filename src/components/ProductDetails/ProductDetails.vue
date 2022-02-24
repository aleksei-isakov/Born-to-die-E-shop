<template>
  <div class="product-details__wrapper" :class="{ open: isDescriptionOpen }">
    <div class="arrow-icon" @click="onClickToggleDescription">
      <span class="left-bar"></span>
      <span class="right-bar"></span>
    </div>
    <transition name="fade">
      <div v-if="isDescriptionOpen" class="description">
        <div class="description__title">Product Description</div>
        <div class="description__text">{{ description }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  props: {
    description: {
      type: String,
      default: '',
      required: true
    }
  },

  data() {
    return {
      isDescriptionOpen: false
    };
  },

  methods: {
    onClickToggleDescription() {
      this.isDescriptionOpen = !this.isDescriptionOpen;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';
$easing: cubic-bezier(0.25, 1, 0, 0.8);
$duration: 0.2s;

.product-details__wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: $white;
  width: 100%;
  padding: 15px 20px;
  color: $font-color-text;
  transition: $transition;
  border-top: solid 1px $light-border-color;
}

.description {
  align-self: flex-start;
  text-align: start;
  &__title {
    font-weight: bold;
    color: $font-color-title;
  }
}

.arrow-icon {
  margin-left: 8px;
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  width: 70px;
  height: 25px;
}

.left-bar {
  position: absolute;
  background-color: transparent;
  top: 10px;
  left: 0;
  width: 40px;
  height: 4px;
  display: block;
  transform: rotate(35deg);
  float: right;
  border-radius: 2px;
  &:after {
    content: '';
    background-color: $font-color-text;
    width: 40px;
    height: 4px;
    display: block;
    float: right;
    border-radius: 6px 10px 10px 6px;
    transition: all $duration $easing;
    z-index: -1;
  }
}

.right-bar {
  position: absolute;
  background-color: transparent;
  top: 10px;
  left: 30px;
  width: 40px;
  height: 4px;
  display: block;
  transform: rotate(-35deg);
  float: right;
  border-radius: 2px;
  &:after {
    content: '';
    background-color: $font-color-text;
    width: 40px;
    height: 4px;
    display: block;
    float: right;
    border-radius: 10px 6px 6px 10px;
    transition: all $duration $easing;
    z-index: -1;
  }
}

.open {
  .left-bar:after {
    transform-origin: center center;
    transform: rotate(-70deg);
  }
  .right-bar:after {
    transform-origin: center center;
    transform: rotate(70deg);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media screen and (max-width: $tablet-size) {
  .arrow-icon {
    margin: 0px auto;
  }
}
</style>
