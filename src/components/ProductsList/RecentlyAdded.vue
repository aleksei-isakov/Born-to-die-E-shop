<template>
  <div class="recently-added">Recently added</div>
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

<style>
.recently-added {
  text-align: start;
  margin-bottom: 20px;
  color: #8b8a8a;
  font-size: 16px;
}
</style>
