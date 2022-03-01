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
.footer-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgb(230, 230, 230), rgb(190, 190, 190));
  width: 100%;
  color: #2c2c2c;
  height: 40px;
  margin-top: auto;
}
</style>
