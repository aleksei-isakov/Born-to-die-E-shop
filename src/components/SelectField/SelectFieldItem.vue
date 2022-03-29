<template>
  <li @mousedown="onClickChooseItem">
    {{ category }}
  </li>
</template>

<script>
export default {
  name: 'SelectFieldItem',

  props: {
    category: {
      type: String,
      required: true,
      default: ''
    },

    index: {
      type: Number,
      required: true,
      default: 0
    }
  },

  methods: {
    onClickChooseItem() {
      this.$emit('chooseItem', this.index);
    }
  }
};
</script>
