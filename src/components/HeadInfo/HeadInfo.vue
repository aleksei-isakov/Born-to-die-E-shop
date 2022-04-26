<template>
  <div class="head-info__wrapper">
    <div class="head-info__content">
      <div class="head-info__name">{{ name }}</div>
      <div class="head-info__date">date: {{ getDate }}</div>
    </div>
    <div class="head-info__price-container">
      <div v-if="discountPercentage" class="head-info__price-discount">
        <div class="head-info__discount">{{ discountPercentage }} %</div>
        <div class="head-info__price">{{ priceWithDiscount | currency }}</div>
      </div>
      <div
        :class="{ 'head-info__crossed': discountPercentage }"
        class="head-info__price"
      >
        {{ price | currency }}
      </div>
    </div>
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
    },

    discountPercentage: {
      type: Number,
      required: true,
      default: 0
    },

    priceWithDiscount: {
      type: Number,
      required: true,
      default: 0
    }
  },

  computed: {
    getDate() {
      return format(new Date(this.date), 'DD.MM.YYYY');
    }

    // getPrice() {
    //   return this.price.toFixed(1);
    // },

    // getPriceWithDiscount() {
    //   return this.priceWithDiscount.toFixed(1);
    // }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.head-info {
  &__discount {
    color: $white;
    background-color: #b61d1c;
    padding: 6px 16px;
    border-radius: 20px;
    width: fit-content;
    height: fit-content;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 30px 20px;
    border-bottom: solid 1px #e6e6e6;
  }

  &__price-container {
    display: flex;
    align-items: center;
  }

  &__price-discount {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__content {
    text-align: left;
  }

  &__name {
    font-size: $font-size-subtitle;
    color: $font-color-title;
    @media screen and (max-width: $mobile-size) {
      font-size: $font-size-basic;
    }
  }

  &__date {
    font-size: $font-size-basic;
    color: $font-color-text;
  }

  &__price {
    font-size: $font-size-title;
    color: $font-color-title;
    white-space: nowrap;
    @media screen and (max-width: $mobile-size) {
      font-size: 28px;
    }
  }

  &__crossed {
    text-decoration: line-through;
    color: $font-color-subtitle;
    font-size: 14px;
    margin-left: 10px;
  }
}
</style>
