<template>
  <button class="BaseButtonLink" @click="click">
    <a :href="href"><slot></slot></a>
  </button>
</template>

<script>
export default {
  name: 'BaseButtonLink',

  props: {
    href: {
      type: String,
      default: ''
    }
  },

  data() {
    return {};
  },

  methods: {
    click() {
      this.$emit('click', data);
    }
  }
};
</script>
