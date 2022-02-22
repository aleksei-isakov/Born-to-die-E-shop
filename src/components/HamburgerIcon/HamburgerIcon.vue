<template>
  <div :class="btnStyle" @click="onClickToggleButtonStyle">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>
export default {
  name: 'HamburgerIcon',

  data: function () {
    return {
      isActive: false
    };
  },

  computed: {
    btnStyle() {
      return this.isActive ? 'container active' : 'container';
    }
  },

  methods: {
    onClickToggleButtonStyle() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.container {
  display: inline;
  cursor: pointer;
}

.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 4px;
  background-color: #fff;
  margin: 6px 0;
  transition: $transition;
}

.active .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.active .bar2 {
  opacity: 0;
}

.active .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
