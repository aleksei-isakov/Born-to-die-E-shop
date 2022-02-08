<template>
  <div>
    <h1>Basic Buttons</h1>
    <div
      style="
        height: 50px;
        background-color: #1876d1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin-bottom: 20px;
      "
    >
      <BaseButtonRouter :path="'/'">Page 1</BaseButtonRouter>
      <BaseButtonRouter :path="'/profile'">Page 2</BaseButtonRouter>
      <BaseButtonRouter :path="'/profile'">Page 3</BaseButtonRouter>
      <BaseButtonRouter :path="'/profile'">Page 4</BaseButtonRouter>
    </div>
    <div
      style="
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 50px;
      "
    >
      <ButtonDefault @click="onClickConsoleLog('Default')">
        Default
      </ButtonDefault>
      <ButtonPrimary @click="onClickConsoleLog('Primary')">
        Primary
      </ButtonPrimary>
      <ButtonPrimary @click="onClickConsoleLog('disabled')" disabled>
        Disabled Primary
      </ButtonPrimary>
    </div>

    <ProductsList />
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import {
  BaseButtonRouter,
  ButtonDefault,
  ButtonPrimary
} from '@/base_components/';

export default {
  name: 'HomePage',

  components: {
    ProductsList,
    BaseButtonRouter,
    ButtonDefault,
    ButtonPrimary
  },

  methods: {
    onClickConsoleLog(message) {
      console.log(message);
    }
  }
};
</script>
