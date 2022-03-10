<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="400">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h6">
          Are you sure you want to remove all the products from the cart?
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> No </v-btn>
          <v-btn color="primary" text @click="dialog = false"> Yes </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

//
<script>
//import { EmptyCartButton } from '../EmptyCartButton/EmptyCartButton.vue';
export default {
  name: 'EmptyCartPopup',
  // components: { EmptyCartButton },
  data() {
    return {
      dialog: false
    };
  }
};
</script>
