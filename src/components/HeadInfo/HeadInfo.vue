<template>
  <div class="wrapper">
    <div class="info">
      <div class="name">{{ headInfo.name }}</div>
      <div class="date__wrapper">
        date: <span class="date">{{ headInfo.date }} </span>
      </div>
    </div>
    <div class="price__wrapper">
      <span class="price">{{ headInfo.price }} </span> $
    </div>
  </div>
</template>

<script>
export default {
  name: 'BtdHeadInfo',

  props: {
    headInfo: {
      type: Object,
      default: () => ({
        name: '',
        date: 0,
        price: 0
      })
    }
  }
};
</script>

//
<style lang="scss" scoped>
@import '../../scss/variables.scss';
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
