<template>
  <div
    :class="[
      { 'product-description_horizontal': isHorizontal },
      'product-description'
    ]"
  >
    <h2 class="product-description__title">{{ title }}</h2>
    <p class="product-description__category">{{ getCategory }}</p>
    <span>{{ getCreatedDate }}</span>
    <br />
    <span>{{ getUpdatedDate }}</span>
    <rating-icon class="product-description__rating-icon" :rating="rating" />
  </div>
</template>

<script>
import { format } from 'date-fns';
import RatingIcon from '../RatingIcon/RatingIcon.vue';

export default {
  name: 'ProductDescription',

  components: { RatingIcon },

  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },

    category: {
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

    rating: {
      type: Number,
      required: true,
      default: 0
    },

    isHorizontal: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  computed: {
    getCreatedDate() {
      return `Created: ${format(new Date(this.created), 'DD.MM.YYYY')}`;
    },

    getUpdatedDate() {
      return this.updated
        ? `Updated: ${format(new Date(this.updated), 'DD.MM.YYYY')}`
        : '';
    },

    getCategory() {
      return this.category ? this.category : 'Category';
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
  margin: 15px 0;

  &_horizontal {
    margin: 0 15px;

    @media screen and (max-width: $tablet-size) {
      margin: 15px;
    }
  }

  &__category {
    font-weight: bold;
  }

  &__title {
    min-height: 65px;
    color: $primary;
    margin-bottom: 10px;
  }

  &__rating-icon {
    margin: 15px 0;
  }
}
</style>
