<template>
  <div>
    <div>
      <div class="title">Buttons</div>
      <div>
        <div class="sub-title">Flat</div>
        <md-button>Default</md-button>
        <md-button class="md-primary">Primary</md-button>
        <md-button class="md-accent">Accent</md-button>
        <md-button disabled>Disabled</md-button>
      </div>

      <div>
        <div class="sub-title">Raised</div>
        <md-button class="md-raised">Default</md-button>
        <md-button class="md-raised md-primary">Primary</md-button>
        <md-button class="md-raised md-accent">Accent</md-button>
        <md-button class="md-raised" disabled>Disabled</md-button>
      </div>
    </div>
    <div>
      <div class="title">Tabs</div>
      <md-tabs class="md-transparent" md-alignment="fixed">
        <md-tab id="tab-1" md-label="Sign In"></md-tab>
        <md-tab id="tab-2" md-label="Sign Up"></md-tab>
      </md-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

export default {
  name: 'ComponentsPage'
};
</script>

<style>
@import './ComponentsPage.module.scss';
</style>
