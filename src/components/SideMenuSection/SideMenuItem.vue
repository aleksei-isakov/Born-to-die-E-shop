<template>
  <div>
    <div
      v-for="item in items"
      :key="item.id"
      class="side-menu-item"
      @click="onClickClosePopup"
    >
      <base-button-router :path="item.path" :class="titleStyle">
        <i
          :class="`${item.icon} side-menu-item__icon side-menu-item__icon_${color}`"
        />
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

  props: {
    color: {
      type: String,
      default: 'blue'
    }
  },

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

  computed: {
    titleStyle() {
      return `side-menu-item__title side-menu-item__title_${this.color}`;
    }
  },

  methods: {
    onClickClosePopup() {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

.side-menu-item {
  display: flex;
  padding: 9px 12px;

  &__icon {
    font-size: 20px;
    margin-right: 5px;

    &_blue {
      color: $primary;
    }

    &_grey {
      color: $font-color-subtitle;
    }
  }

  &__title {
    font-size: 16px;
    width: 100%;
    text-align: left;
  }

  > .side-menu-item__title_blue {
    color: $primary;
    &:hover {
      color: $primary;
      text-decoration: none;
    }
  }

  > .side-menu-item__title_grey {
    color: $font-color-subtitle;
    &:hover {
      color: $grey-hover;
      text-decoration: none;
    }
  }
}
</style>
