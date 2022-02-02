import { shallowMount } from '@vue/test-utils';
import BaseButtonRouter from '../BaseButtonRouter.vue';

describe('BaseButtonRouter.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(BaseButtonRouter, {
      props: {
        path: {
          type: String,
          default: ''
        },

        methods: {
          click() {
            this.$emit('click', data);
          }
        }
      }
    });

    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(BaseButtonRouter)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
