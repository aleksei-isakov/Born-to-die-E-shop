<template>
  <div class="product-description">
    <h2 class="product-description__title">{{ title }}</h2>
    <p class="product-description__field">{{ field }}</p>
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
      type: Date,
      required: true,
      default: () => {
        return new Date();
      }
    },

    updated: {
      type: Date,
      default: () => {
        return new Date();
      }
    }
  },

  computed: {
    getCreatedDate() {
      return `Created: ${this.formatDate(this.created)}`;
    },

    getUpdatedDate() {
      return `Updated: ${this.formatDate(this.updated)}`;
    }
  },

  methods: {
    formatDate(date) {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      return `${day}.${month}.${year}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

.product-description {
  color: #8b8a8a;
  text-align: start;
  width: 100%;
  margin: 15px 0px;
}
.product-description__title {
  color: $primary;
}
.product-description__field {
  font-weight: bold;
}
</style>
