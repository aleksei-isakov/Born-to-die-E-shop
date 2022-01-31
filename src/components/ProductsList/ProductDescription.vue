<template>
  <div class="item-description">
    <h2 class="product-title">{{ description.title }}</h2>
    <p class="description-field">{{ description.field }}</p>
    <span>{{ countCreatedDate }}</span>
    <br />
    <span>{{ countUpdatedDate }}</span>
  </div>
</template>

<script>
export default {
  props: ['description'],
  data() {
    return {};
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
    countCreatedDate() {
      return this.formatDate(this.description.created);
    },
    countUpdatedDate() {
      return this.formatDate(this.description.updated);
    }
  }
};
</script>

<style>
.item-description {
  color: #8b8a8a;
  padding: 20px;
  text-align: start;
  width: 100%;
}
.product-title {
  color: #1876d1;
}
.description-field {
  font-weight: bold;
}
</style>
