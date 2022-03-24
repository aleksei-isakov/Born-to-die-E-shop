<template>
  <div class="title-icon" @click="onClickEmitEvent">
    <img :src="source" :width="width" alt="icon" />
  </div>
</template>

<script>
export default {
  name: 'BaseCustomIcon',

  props: {
    icon: {
      type: String,
      required: true
    },

    width: {
      type: [Number, String],
      default: 55
    }
  },

  computed: {
    source() {
      return require(`../../assets/Icons/${this.icon}.svg`);
    }
  },

  methods: {
    onClickEmitEvent() {
      this.$emit('click');
    }
  }
};
</script>

<style scoped></style>
