<template>
  <div class="side-menu-popup">
    <side-menu-items @on-click-close-popup="onClickClosePopup" />
    <base-button
      class="side-menu-item side-menu-item_logout"
      @click="onClickClosePopup"
    >
      <i class="fas fa-sign-out-alt side-menu-item__icon"></i>
      <span> Log out </span>
    </base-button>
  </div>
</template>

<script>
import BaseButton from '@/base_components/BaseButton/BaseButton.vue';
import SideMenuItems from '@/components/SideMenuSection/SideMenuItems.vue';
export default {
  name: 'SideMenuPopup',

  components: { SideMenuItems, BaseButton },

  methods: {
    onClickClosePopup() {
      this.$emit('on-click-close-popup');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.side-menu-popup {
  margin-top: 2px;
  top: 34px;
  right: 0;
  width: 180px;
  background: $white;
  border-radius: 4px;
  box-shadow: $shadow;
}

.side-menu-item_logout {
  font-size: 16px;
  width: 100%;
  text-align: left;
  align-items: center;
  color: $primary;

  &:hover :not(.side-menu-item__icon) {
    text-decoration: underline;
  }
}
</style>
