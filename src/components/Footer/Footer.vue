<template>
  <div class="footer-wrapper">
    <span>EPAM Systems &copy; 2022</span>
  </div>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';
.footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: $background-light-grey;
  height: 40px;
  margin-top: auto;
}
</style>
