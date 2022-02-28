<template>
  <div id="app">
    <v-row justify="center">
      <v-dialog max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <!-- <BaseTextBorderButton
            v-bind="attrs"
            @click="onClickToggleDialog"
            v-on="on"
          >
            ADD NEW FEEDBACK
          </BaseTextBorderButton> -->
          <v-btn outlined color="#1876d1" v-bind="attrs" v-on="on">
            ADD NEW FEEDBACK
          </v-btn>
        </template>
        <v-card>
          <v-card-text>
            <v-icon>fas fa-times</v-icon>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-text-field
                    label="Enter your first name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="12" md="12">
                  <v-textarea
                    label="Comment"
                    auto-grow
                    outlined
                    rows="1"
                    row-height="150"
                  ></v-textarea>
                </v-col>

                <v-col cols="12" sm="12" md="12">
                  <v-card-actions>
                    <v-btn color="blue darken-1" block text @click="closeForm">
                      ADD FEEDBACK
                    </v-btn>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import BaseTextBorderButton from '@/base_components/BaseTextButtons/BaseTextBorderButton';

export default {
  name: 'FeedbackForm',
  components: {
    // BaseTextBorderButton
  },
  methods: {
    closeForm() {
      this.$emit('closeForm', false);
    }
  }
};
</script>

<style lang="scss" scoped></style>
