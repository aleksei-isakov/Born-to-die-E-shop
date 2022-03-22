<template>
  <div class="text-center">
    <v-snackbar
      v-model="isErrorTrue"
      :timeout="timeout"
      top
      outlined
      vertical
      color="red"
    >
      {{ errorMessage }}

      <template v-slot:action="{ attrs }">
        <v-btn color="black" text v-bind="attrs" @click="closeSnackbar">
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

    isErrorTrue: {
      get() {
        return this.isError;
      },

      set() {
        this.closeSnackbar();
      }
    }
  },

  methods: {
    ...mapActions('globalmessagestate', ['closeSnackbar'])
  }
};
</script>
