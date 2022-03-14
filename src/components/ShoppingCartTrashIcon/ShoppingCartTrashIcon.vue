<template>
  <div class="trash-icon__wrapper">
    <BaseCustomIcon
      class="trash-icon"
      :width="25"
      icon="delete"
      @click="onClickDeleteItem"
    />
  </div>
</template>

<script>
import { BaseCustomIcon } from '@/base_components/';
import { mapGetters } from 'vuex';

export default {
  name: 'ShoppingCartTrashIcon',

  components: {
    BaseCustomIcon
  },

  // computed: {
  //   ...mapGetters('ShoppingCartModule', ['productsInCart'])
  // },

  methods: {
    onClickDeleteItem() {
      this.$emit('onClickDeleteItem');
    }
  }
};
</script>

<style lang="scss" scoped>
.trash-icon {
  margin: 20px;
  cursor: pointer;
}
</style>
