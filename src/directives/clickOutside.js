import Vue from 'vue';

export default Vue.directive('click-outside', {
  bind(element, binding, vnode) {
    element.clickOutsideEvent = function (event) {
      if (!element.contain(event.target)) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', element.clickOutsideEvent);
  },

  unbind(element) {
    document.body.removeEventListener('click', element.clickOutsideEvent);
  }
});
