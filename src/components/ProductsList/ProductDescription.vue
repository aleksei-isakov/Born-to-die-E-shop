<template>
  <div class="product-description">
    <h2 class="product-description__title">{{ title }}</h2>
    <p class="product-description__field">{{ field }}</p>
    <span>Created: {{ getCreatedDate }}</span>
    <br />
    <span>Updated: {{ getUpdatedDate }}</span>
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

  methods: {
    formatDate(date) {
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      return `${day}.${month}.${year}`;
    }
  },

  computed: {
    getCreatedDate() {
      return this.formatDate(this.created);
    },
    getUpdatedDate() {
      return this.formatDate(this.updated);
    }
  }
};
</script>

<style>
.product-description {
  color: #8b8a8a;
  text-align: start;
  width: 100%;
  margin: 15px 0px;
}
.product-description__title {
  color: #1876d1;
}
.product-description__field {
  font-weight: bold;
}
</style>
