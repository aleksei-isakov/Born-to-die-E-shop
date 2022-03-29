import { createLocalVue, shallowMount } from '@vue/test-utils';
import PLPSearchBar from '../PLPSearchBar.vue';
import Vuex from 'vuex';

const categoriesExample = ['a', 'b', 'c'];
let wrapper;
let getters;
let store;
const inputValue = 'my input';
const localVue = createLocalVue();

localVue.use(Vuex);

beforeEach(() => {
  getters = {
    categories: () => [categoriesExample]
  };

  store = new Vuex.Store({
    modules: {
      PlpPageModule: {
        namespaced: true,
        getters
      }
    }
  });

  wrapper = shallowMount(PLPSearchBar, {
    store,
    localVue
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('PLPSearchBar', () => {
  it('should emit search event', () => {
    wrapper.vm.onSearch(inputValue);
    expect(wrapper.emitted().search).toEqual([['my input']]);
  });

  it('should render correctly and match valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
