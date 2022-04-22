<template>
  <div class="page-container error-page">
    <base-custom-icon class="error-page__icon" icon="404" width="100%" />
    <h1 class="error-page__title">
      OOOOPS! WE COULDN'T FIND&nbsp;THIS&nbsp;PAGE
    </h1>
    <p class="error-page__subtitle">Sorry for inconvenience</p>
  </div>
</template>

<script>
import { BaseCustomIcon } from '@/base_components';

export default {
  name: 'NotFoundPage',

  components: { BaseCustomIcon }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 100%;

  &__icon {
    width: 100%;
    max-width: 600px;
  }

  &__title {
    color: $font-color-subtitle;
    font-size: $font-size-title;
    line-height: 45px;
    font-weight: 500;

    @media (max-width: $mobile-size) {
      font-size: $font-size-basic;
      line-height: 22px;
    }
  }

  &__subtitle {
    color: $font-color-subtitle;
    font-size: $font-size-basic;

    @media (max-width: $mobile-size) {
      font-size: 16px;
    }
  }
}
</style>
