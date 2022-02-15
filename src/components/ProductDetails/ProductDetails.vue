<template>
  <div class="wrapper" :class="{ open: isDescriptionOpen }">
    <div class="arrow-icon" @click="onClickToggleDescription">
      <span class="left-bar"></span>
      <span class="right-bar"></span>
    </div>
    <transition name="fade">
      <div v-if="isDescriptionOpen" class="description">
        <div class="description__title">Product Description</div>
        <div class="description__text">{{ productDescription }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',

  props: {
    productDescription: {
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
@import '@/scss/variables.scss';
$easing: cubic-bezier(0.25, 1, 0, 0.8);
$duration: 0.2s;

.wrapper {
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
  padding: 15px 10px;
  color: $font-color-text;
  box-shadow: $shadow;
  transition: 0.5s;
}

.description {
  align-self: flex-start;
  text-align: start;
  padding-top: 20px;
  &__title {
    font-weight: bold;
    color: $font-size-subtitle;
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
  height: 5px;
  display: block;
  transform: rotate(35deg);
  float: right;
  border-radius: 2px;
  &:after {
    content: '';
    background-color: $font-color-text;
    width: 40px;
    height: 5px;
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
  height: 5px;
  display: block;
  transform: rotate(-35deg);
  float: right;
  border-radius: 2px;
  &:after {
    content: '';
    background-color: $font-color-text;
    width: 40px;
    height: 5px;
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

@media screen and (max-width: 767px) {
  .arrow-icon {
    margin: 0px auto;
  }
}
</style>
