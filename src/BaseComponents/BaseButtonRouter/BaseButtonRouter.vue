<template>
  <button class="BaseButtonRouter" @click="click">
    <router-link :to="require(path)"><slot></slot></router-link>
  </button>
</template>

<script>
export default {
  name: 'BaseButtonRouter',

  props: {
    path: {
      type: String,
      default: ''
    },

    data() {
      return {};
    },

    methods: {
      click() {
        this.$emit('click', data);
      }
    }
  }
};
</script>
