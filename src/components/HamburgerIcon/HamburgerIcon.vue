<template>
  <div class="container" @click="toggleChange">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
  </div>
</template>

<script>
export default {
  name: 'HamburgerIcon',

  methods: {
    toggleChange() {
      this.classList.toggle('change');
    }
  }
};
</script>

<style scoped>
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
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
