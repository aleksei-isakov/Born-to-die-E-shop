<template>
  <div v-if="isDesktop" class="profile-page-menu__container">
    <div class="profile-page-menu__wrapper">
      <div class="profile-page-menu__sections">
        <side-menu-item class="profile-page-menu__sidebar" color="grey" />
        <div class="profile-page-menu__content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import SideMenuItem from '@/components/SideMenuSection/SideMenuItem';

export default {
  name: 'ProfilePageMenuDesktop',

  components: {
    SideMenuItem
  },

  computed: {
    ...mapGetters('ProfilePageModule', ['isDesktop', 'isMobile'])
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.profile-page-menu {
  &__container {
    min-width: 100%;
    min-height: 100%;
  }

  &__wrapper {
    margin: 0 auto;
    width: 70%;
  }

  &__sections {
    display: flex;
    gap: 20px;
    margin-top: 10px;
  }

  &__sidebar,
  &__content {
    background: #ffffff;
    border: 1px solid $light-border-color;
    box-shadow: $shadow;
    height: 450px;
  }

  &__content {
    width: 70%;
  }

  &__sidebar {
    width: 30%;
    min-width: 200px;
    padding: 10px;
  }
}
</style>
