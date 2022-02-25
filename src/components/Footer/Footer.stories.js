import Footer from './Footer.vue';

export default {
  title: 'Footer',
  component: Footer
};

const FooterTemplate = () => ({
  components: { Footer },
  template: `<Footer/>`
});

export const Default = FooterTemplate.bind({});
