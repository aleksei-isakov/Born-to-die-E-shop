<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <p>
      The project uses Material UI design. To start using its components <br />
      check out the official
      <a
        href="https://www.creative-tim.com/vuematerial"
        target="_blank"
        rel="noopener"
        >Vue Material documentation</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<style>
@import './Introduction.module.scss';
</style>
