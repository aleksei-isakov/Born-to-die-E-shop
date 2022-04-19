<template>
  <div>
    <div
      v-for="item in items"
      :key="item.id"
      class="side-menu-item"
      @click="onClickClosePopup"
    >
      <base-button-router :path="item.path" :class="getTitleStyle">
        <i
          :class="`${item.icon} side-menu-item__icon side-menu-item__icon_${validColor}`"
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
      default: 'custom-blue'
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

        {
          title: 'My wishlist',
          icon: 'fas fa-heart',
          path: '/wishlist'
        },

        {
          title: 'My orders',
          icon: 'fas fa-folder',
          path: '/profile/orders'
        },

        {
          title: 'My address book',
          icon: 'fas fa-address-book',
          path: '/profile/address-book'
        }
      ]
    };
  },

  computed: {
    validColor() {
      return ['custom-blue', 'custom-grey'].indexOf(this.color) !== -1
        ? this.color
        : 'custom-blue';
    },

    getTitleStyle() {
      return `side-menu-item__title side-menu-item__title_${this.validColor}`;
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

    &_custom-blue {
      color: $primary;
    }

    &_custom-grey {
      color: $font-color-subtitle;
    }
  }

  &__title {
    font-size: 16px;
    width: 100%;
    text-align: left;
  }

  > .side-menu-item__title {
    &_custom-blue {
      color: $primary;
      &:hover {
        color: $primary;
      }
    }

    &_custom-grey {
      color: $font-color-subtitle;
      &:hover {
        color: $grey-hover;
        text-decoration: none;
      }
    }
  }
}
</style>
