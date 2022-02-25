<template>
  <div class="head-info__wrapper">
    <div class="head-info__content">
      <div class="head-info__name">{{ name }}</div>
      <div class="head-info__date">date: {{ getDate }}</div>
    </div>
    <div class="head-info__price">{{ price }} $</div>
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'HeadInfo',

  props: {
    name: {
      type: String,
      default: ''
    },

    date: {
      type: String,
      default: ''
    },

    price: {
      type: Number,
      required: true,
      default: 0
    }
  },

  computed: {
    getDate() {
      return format(new Date(this.date), 'DD.MM.YYYY');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.head-info__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 30px 20px;
  border-bottom: solid 1px #e6e6e6;
}

.head-info__content {
  text-align: left;
}

.head-info__name {
  font-size: $font-size-subtitle;
  color: $font-color-title;
}

.head-info__date {
  font-size: $font-size-basic;
  color: $font-color-text;
}

.head-info__price {
  font-size: $font-size-title;
  color: $font-color-title;
  white-space: nowrap;
}

@media screen and (max-width: $mobile-size) {
  .head-info__name {
    font-size: $font-size-basic;
  }

  .head-info__price {
    font-size: 28px;
  }
}
</style>
