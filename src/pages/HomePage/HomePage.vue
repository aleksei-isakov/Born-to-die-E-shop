<template>
  <div>
    <h1>Basic Buttons</h1>
    <div
      style="
        height: 60px;
        background-color: #1876d1;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;
        margin-bottom: 30px;
      "
    >
      <BorderButton color="white" @click="onClickConsoleLog('Border white')">
        Border white
      </BorderButton>
      <FilledButton color="white" @click="onClickConsoleLog('Filled white')">
        Filled white
      </FilledButton>
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
        <BorderButton color="blue" @click="onClickConsoleLog('Border blue')">
          Border blue
        </BorderButton>
        <BorderButton color="red" @click="onClickConsoleLog('Border red')">
          Border red
        </BorderButton>
        <BorderButton
          color="red"
          @click="onClickConsoleLog('Border red disabled')"
          disabled
        >
          Border disabled
        </BorderButton>
        <BorderButton
          @click="onClickConsoleLog('Border without setting color')"
        >
          Border without setting color
        </BorderButton>
      </div>

      <div style="display: flex; justify-content: center; gap: 20px">
        <h2>Filled buttons</h2>
        <FilledButton color="blue" @click="onClickConsoleLog('Filled blue')">
          Filled blue
        </FilledButton>
        <FilledButton
          color="red"
          @click="onClickConsoleLog('Filled disabled red')"
        >
          Filled disabled red
        </FilledButton>
        <FilledButton
          color="red"
          @click="onClickConsoleLog('disabled')"
          disabled
        >
          Filled disabled
        </FilledButton>
        <FilledButton
          @click="onClickConsoleLog('Filled without setting color')"
        >
          Filled without setting color
        </FilledButton>
      </div>
    </div>

    <ProductsList />
  </div>
</template>

<script>
import ProductsList from '@/components/ProductsList/ProductsList.vue';
import { BorderButton, FilledButton } from '@/base_components/';

export default {
  name: 'HomePage',

  components: {
    ProductsList,
    BorderButton,
    FilledButton
  },

  methods: {
    onClickConsoleLog(message) {
      console.log(message);
    }
  }
};
</script>
