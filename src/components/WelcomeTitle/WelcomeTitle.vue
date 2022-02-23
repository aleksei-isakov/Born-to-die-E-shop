<template>
  <div class="welcome-title__banner">
    <h1 class="welcome-title">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'WelcomeTitle',

  props: {
    title: {
      type: [String, Number],
      default: 'Welcome to Born2Die Market!',
      required: true
    }
  }
};
</script>

<style scoped>
.welcome-title {
  color: #0000ff;
  font-size: 40px;
  font-weight: lighter;
}
.welcome-title__banner {
  display: inline-block;
  margin: 5px;
}
</style>
