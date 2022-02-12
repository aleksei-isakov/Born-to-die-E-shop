<template>
  <div class="page-wrapper">
    <CustomFilter
      :selectedIconPath="selectedIconPath"
      @click="onClickSwitchSelectedIconPath"
    />
  </div>
</template>

<script>
import CustomFilter from '@/components/CustomFilter/CustomFilter.vue';

export default {
  name: 'PlpPage',

  components: {
    CustomFilter
  },

  data() {
    return {
      selectedIconPath: 'menu_filter_column'
    };
  },

  methods: {
    onClickSwitchSelectedIconPath(iconPath) {
      this.selectedIconPath = iconPath;
    }
  }
};
</script>

<style>
.page-wrapper {
  max-width: 1440px;
  margin: 45px auto 0;
  padding: 0 50px;
}
</style>
