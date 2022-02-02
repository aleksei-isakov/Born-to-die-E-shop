import { shallowMount } from '@vue/test-utils';
import BaseButtonLink from '../BaseButtonLink.vue';

describe('BaseButtonLink.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(BaseButtonLink, {
      props: {
        href: {
          type: String,
          default: ''
        }
      },

      methods: {
        click() {
          this.$emit('click', data);
        }
      }
    });

    expect(wrapper.find('button')).toBeTruthy();
    expect(wrapper.is(BaseButtonLink)).toBeTruthy();
  });

  it('renders a valid snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
