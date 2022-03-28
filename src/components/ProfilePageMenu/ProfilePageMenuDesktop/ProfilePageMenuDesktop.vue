<template>
  <side-menu-item class="profile-page-menu__sidebar" color="custom-grey" />
</template>

<script>
import SideMenuItem from '@/components/SideMenuSection/SideMenuItem';

export default {
  name: 'ProfilePageMenuDesktop',

  components: {
    SideMenuItem
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.profile-page-menu {
  &__sidebar {
    background: #ffffff;
    border: 1px solid $light-border-color;
    box-shadow: $shadow;
    height: 450px;
    min-width: 220px;
    padding: 10px;
  }
}
</style>
