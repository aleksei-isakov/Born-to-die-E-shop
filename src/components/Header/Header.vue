<template>
  <div class="header-wrapper">
    <div class="block-wrapper">
      <div class="header-logo">
        <img
          class="header-logo__icon"
          src="../../assets/Icons/grade_white_24dp.svg"
        />
      </div>

      <BaseButtonRouter class="header-button__home">HOME</BaseButtonRouter>
      <BaseButtonRouter class="header-button__products"
        >PRODUCTS</BaseButtonRouter
      >
    </div>
    <div class="block-wrapper">
      <img
        class="header-icon__cart"
        src="../../assets/Icons/shopping_basket_white_24dp.svg"
      />
      <BaseButton class="header-button__signIn">SIGN IN</BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButtonRouter from '../../base_components/BaseButtonRouter/BaseButtonRouter.vue';
import BaseButton from '../../base_components/BaseButton/BaseButton.vue';

export default {
  name: 'Header',

  props: {},

  components: {
    BaseButtonRouter,
    BaseButton
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import '../../scss/variables.scss';

button {
  font-size: $font-size-basic;
  color: white;
  background: $primary;
  box-shadow: none;
  border-width: 0px;
  padding: 10px;
}

a {
  color: white;
}

.header-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $primary;
  padding: 10px;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
}

.header-logo__icon {
  width: 40px;
  height: auto;
  margin: 0 20px 0 20px;
}

.header-icon__cart {
  width: 30px;
  height: auto;
  margin-right: 10px;
}

.block-wrapper {
  display: flex;
  justify-content: space-between;
}

.header-button__signIn {
  border: 1px solid white;
  padding: 8px;
  border-radius: 5px;
}
</style>
