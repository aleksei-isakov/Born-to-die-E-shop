<template>
  <div>
    <div
      v-for="item in items"
      :key="item.id"
      class="side-menu-item"
      @click="onClickClosePopup"
    >
      <base-button-router :path="item.path" class="side-menu-item__title">
        <i :class="`${item.icon} side-menu-item__icon`" />
        {{ item.title }}
      </base-button-router>
    </div>
  </div>
</template>

<script>
import BaseButtonRouter from '@/base_components/BaseButtonRouter/BaseButtonRouter.vue';

export default {
  name: 'SideMenuItem',

  components: { BaseButtonRouter },

  data() {
    return {
      items: [
        {
          title: 'My profile',
          icon: 'fas fa-house-user',
          path: '/profile'
        },

        { title: 'My wishlist', icon: 'fas fa-heart', path: '/wishlist' },

        {
          title: 'My orders',
          icon: 'fas fa-folder',
          path: '/orders'
        },

        {
          title: 'My address book',
          icon: 'fas fa-address-book',
          path: '/address-book'
        }
      ]
    };
  },

  methods: {
    onClickClosePopup() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss">
@import '@/scss/CustomVariables.scss';

.side-menu-item {
  display: flex;
  padding: 9px 12px;

  &__icon {
    font-size: 20px;
    color: $primary;
    margin-right: 5px;
  }

  &__title {
    font-size: 16px;
    width: 100%;
    text-align: left;
    color: $primary !important;
  }
}
</style>
