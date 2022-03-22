<template>
  <side-menu-item @click="onClickClosePopup" />
</template>

<script>
import SideMenuItem from './SideMenuItem.vue';

export default {
  name: 'SideMenuItems',

  components: { SideMenuItem },

  methods: {
    onClickClosePopup() {
      this.$emit('close');
    }
  }
};
</script>
