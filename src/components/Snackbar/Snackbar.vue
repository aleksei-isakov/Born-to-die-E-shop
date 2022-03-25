<template>
  <div>
    <v-snackbar
      v-model="hasError"
      :timeout="timeout"
      top
      outlined
      vertical
      color="red"
    >
      {{ errorMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="closeGlobalMessage">
          Ok
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Snackbar',

  data() {
    return {
      timeout: 2000
    };
  },

  computed: {
    ...mapGetters('globalmessagestate', ['isError', 'errorMessage']),

    hasError: {
      get() {
        return this.isError;
      },

      set() {
        this.closeGlobalMessage();
      }
    }
  },

  methods: {
    ...mapActions('globalmessagestate', ['closeGlobalMessage'])
  }
};
</script>
