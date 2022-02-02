<template>
  <div class="title-icon">
    <img :src="source" :width="width" alt="icon" />
  </div>
</template>

<script>
export default {
  name: 'CustomIcon',

  props: {
    icon: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 55
    }
  },

  computed: {
    source() {
      return require(`@/assets/Icons/${this.icon}.svg`);
    }
  }
};
</script>

<style scoped>
.title-icon {
  margin: 5px;
}
</style>
