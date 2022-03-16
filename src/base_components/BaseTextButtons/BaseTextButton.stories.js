import BaseTextButton from './BaseTextButton.vue';
import { action } from '@storybook/addon-actions';

export default {
  title: 'BaseTextButton',
  component: BaseTextButton
};

const BaseTextButtonTemplate = (args) => ({
  components: { BaseTextButton },
  template: `
    <base-text-button @click='onClickEmitEvent'>
      ${args.default}
    </base-text-button>
  `,
  methods: {
    onClickEmitEvent: action('clicked')
  }
});

export const Default = BaseTextButtonTemplate.bind({});
Default.args = {
  default: 'Text button'
};
