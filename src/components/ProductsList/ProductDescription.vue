<template>
  <div
    class="product-description"
    :class="{ 'product-description--horizontal': isHorizontal }"
  >
    <h2 class="product-description__title">{{ title }}</h2>
    <p class="product-description__field">{{ field ? field : 'Category' }}</p>
    <span>{{ getCreatedDate }}</span>
    <br />
    <span>{{ getUpdatedDate }}</span>
  </div>
</template>

<script>
export default {
  name: 'ProductDescription',

  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },

    field: {
      type: String,
      required: true,
      default: ''
    },

    created: {
      type: String,
      required: true,
      default: ''
    },

    updated: {
      type: String,
      default: ''
    },

    isHorizontal: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
    getCreatedDate() {
      return `Created: ${this.created.slice(0, 10)}`;
    },

    getUpdatedDate() {
      return `${this.updated ? 'Updated:' + this.updated.slice(0, 10) : ''}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.product-description {
  color: #8b8a8a;
  text-align: start;
  width: 100%;
  height: 100%;
  margin: 15px;

  &--horizontal {
    margin: 0 15px;

    @media screen and (max-width: $tablet-size) {
      margin: 15px;
    }
  }

  &__field {
    font-weight: bold;
  }
  &__title {
    color: $primary;
    margin-bottom: 10px;
  }
}
</style>
