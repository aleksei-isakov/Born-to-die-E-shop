<template>
  <div class="wrapper">
    <div class="info">
      <div class="name">{{ name }}</div>
      <div class="date__wrapper">
        date: <span class="date">{{ getFormatDate }} </span>
      </div>
    </div>
    <div class="price__wrapper">
      <span class="price">{{ price }} </span> $
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';

export default {
  name: 'BtdHeadInfo',

  props: {
    name: {
      type: String,
      default: ''
    },

    date: {
      type: Date,
      default: function () {
        return new Date();
      }
    },

    price: {
      type: Number,
      default: 0
    }
  },

  computed: {
    getFormatDate() {
      return format(this.date, 'DD.MM.YYYY');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/variables.scss';
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  width: 100%;
  padding: 20px 10px;
  box-shadow: $shadow;
}

.name {
  font-size: $font-size-subtitle;
  color: $font-color-title;
}

.date__wrapper {
  color: $font-color-text;
}

.price__wrapper {
  font-size: 28px;
  color: $font-color-title;
}
</style>
