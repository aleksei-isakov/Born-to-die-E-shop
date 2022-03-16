<template>
  <div class="recently-added">{{ text }}</div>
</template>

<script>
export default {
  name: 'RecentlyAdded',

  props: {
    text: {
      type: String,
      default: '',
      required: true
    }
  }
};
</script>

<style scoped>
.recently-added {
  text-align: start;
  margin: 20px 0;
  color: #8b8a8a;
  font-size: 16px;
  padding: 0 15vw;
}
</style>
