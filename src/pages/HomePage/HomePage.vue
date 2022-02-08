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
        margin-bottom: 30px;
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
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        margin-bottom: 50px;
      "
    >
      <div style="display: flex; justify-content: center; gap: 20px">
        <h2>Border buttons</h2>
        <ButtonBorder color="blue" @click="onClickConsoleLog('Default blue')">
          Border blue
        </ButtonBorder>
        <ButtonBorder color="red" @click="onClickConsoleLog('Default red')">
          Border red
        </ButtonBorder>
        <ButtonBorder
          color="red"
          @click="onClickConsoleLog('Default red')"
          disabled
        >
          Border disabled
        </ButtonBorder>
        <ButtonBorder
          @click="onClickConsoleLog('Default without setting color')"
        >
          Border without setting color
        </ButtonBorder>
      </div>

      <div style="display: flex; justify-content: center; gap: 20px">
        <h2>Filled buttons</h2>
        <ButtonFilled color="blue" @click="onClickConsoleLog('Primary')">
          Filled blue
        </ButtonFilled>
        <ButtonFilled color="red" @click="onClickConsoleLog('disabled')">
          Filled disabled red
        </ButtonFilled>
        <ButtonFilled
          color="red"
          @click="onClickConsoleLog('disabled')"
          disabled
        >
          Filled disabled
        </ButtonFilled>
        <ButtonFilled @click="onClickConsoleLog('disabled')">
          Filled without setting color
        </ButtonFilled>
      </div>
    </div>

    <ProductsList />
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import {
  BaseButtonRouter,
  ButtonBorder,
  ButtonFilled
} from '@/base_components/';

export default {
  name: 'HomePage',

  components: {
    ProductsList,
    BaseButtonRouter,
    ButtonBorder,
    ButtonFilled
  },

  methods: {
    onClickConsoleLog(message) {
      console.log(message);
    }
  }
};
</script>
