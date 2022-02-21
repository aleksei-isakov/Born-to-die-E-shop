import Vue from 'vue';
import Vuex from 'vuex';
import products from './PLPpage/modules';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    products
  }
});
