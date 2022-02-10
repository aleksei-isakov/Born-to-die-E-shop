<template>
  <div class="header-wrapper">
    <div class="block-wrapper">
      <div class="hamburger-display">
        <HamburgerIcon class="header-hamburger" />
      </div>
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
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon.vue';

export default {
  name: 'Header',

  components: {
    BaseButtonRouter,
    BaseButton,
    HamburgerIcon
  }
};
</script>

<style lang="scss">
@import '../../scss/variables.scss';

@media (min-width: 769px) {
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  .header-button__home {
    font-size: $font-size-basic;
    color: white;
    background: $primary;
    box-shadow: none;
    border-width: 0px;
    padding: 10px;
  }

  .header-button__products {
    font-size: $font-size-basic;
    color: white;
    background: $primary;
    box-shadow: none;
    border-width: 0px;
    padding: 10px;
  }

  .header-wrapper {
    z-index: 1;
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
    border: 1px solid #fff;
    padding: 8px;
    border-radius: 5px;
    color: #fff;
  }
  .hamburger-display {
    display: none;
  }
}

@media (max-width: 769px) {
  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  .header-button__products {
    display: none;
  }

  .header-button__home {
    display: none;
  }

  .header-wrapper {
    z-index: 1;
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
    align-items: center;
  }

  .header-button__signIn {
    border: 1px solid #fff;
    padding: 8px;
    border-radius: 5px;
    color: #fff;
  }

  .hamburger-display {
    display: block;
  }
}
</style>
