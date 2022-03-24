import siteFooter from './siteFooter.vue';

export default {
  title: 'Footer',
  component: siteFooter
};

const FooterTemplate = () => ({
  components: { siteFooter },
  template: `<site-footer/>`
});

export const Default = FooterTemplate.bind({});
