<template>
  <h1 class="welcome-title">
    {{ title }}
  </h1>
</template>

<script>
export default {
  name: 'WelcomeTitle',

  data() {
    return {
      title: 'Welcome to Born2Die Market!'
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.welcome-title {
  padding: 10px 0;
  color: $primary;
  font-size: 40px;
  font-weight: 400;
  text-align: left;
}
</style>
