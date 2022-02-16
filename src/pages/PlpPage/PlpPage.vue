<template>
  <div class="page-wrapper">
    <CustomFilter
      :selected-icon-path="selectedIconPath"
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

  mounted() {
    fetch('http://localhost:3000/664/users')
      .then((data) => data.json())
      .then((data) => console.log(data));
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
