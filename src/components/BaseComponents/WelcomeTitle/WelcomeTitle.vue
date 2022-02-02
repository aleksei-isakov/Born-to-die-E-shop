<template>
  <div class="welcome-title-banner">
    <h1 class="welcome-title">
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'WelcomeTitle',

  props: {
    title: [String, Number]
  }
};
</script>

<style scoped>
.welcome-title {
  color: #0000ff;
  font-size: 40px;
  font-weight: lighter;
}
.welcome-title-banner {
  display: inline-block;
  margin: 5px;
}
</style>
