<template>
  <v-dialog :value="isDialog" width="600px" @input="closeDialog">
    <v-form ref="form" v-model="valid" @submit.prevent="submit">
      <v-card>
        <v-container class="feedback__container">
          <div class="feedback__icon">
            <v-icon color="blue" @click="closeDialog">fas fa-times</v-icon>
          </div>

          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="form.name"
                label="Enter your first name"
                :rules="nameRules"
                @focus="onFocusChangeName"
                @change="onChangeAddAnonName"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                v-model="form.comment"
                label="Comment"
                auto-grow
                outlined
                rows="1"
                row-height="150"
                :rules="commentRules"
              ></v-textarea>
            </v-col>

            <v-col cols="12">
              <base-text-filled-button
                :disabled="!valid"
                class="feedback__btn"
                @click="validate"
              >
                ADD NEW FEEDBACK
              </base-text-filled-button>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import BaseTextFilledButton from '@/base_components/BaseTextButtons/BaseTextFilledButton';

export default {
  name: 'FeedbackForm',

  components: {
    BaseTextFilledButton
  },

  props: {
    isDialog: {
      type: Boolean,
      required: true,
      default: true
    }
  },

  data() {
    return {
      valid: true,
      form: {
        name: null,
        comment: null
      },

      nameRules: [
        (v) => !v || v.length >= 3 || 'Name must be more than 3 characters'
      ],

      commentRules: [
        (v) => !!v || 'Comment is required',
        (v) =>
          (v && v.length >= 30 && v.length <= 1000 && typeof v === 'string') ||
          'Comment must be more than 30 characters'
      ]
    };
  },

  methods: {
    closeDialog() {
      this.$emit('close');
    },

    validate() {
      this.$refs.form.validate();
    },

    onFocusChangeName() {
      this.form.name = '';
    },

    onChangeAddAnonName() {
      if (this.form.name === '') this.form.name = 'Anonymous';
    }

    // async submit() {
    //   console.log('submit!');
    //   await fetch(
    //     'http://localhost:3000/664/products/24a355ea-1e00-4030-b1bd-7295b66f7c9b'
    //   )
    //     .then((data) => data.json())
    //     .then((data) => {
    //       console.log(data?.updatedAt);
    //       let newInfo = data?.updatedAt.push(this.form);

    //       fetch(
    //         'http://localhost:3000/664/products/24a355ea-1e00-4030-b1bd-7295b66f7c9b',
    //         {
    //           method: 'PUT',
    //           body: JSON.stringify(newInfo),
    //           mode: 'cors',
    //           headers: {
    //             'Content-Type': 'application/json',
    //             Authorization:
    //               'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHRlc3QuY29tIiwiaWF0IjoxNjQ2MzA4NDM2LCJleHAiOjE2NDYzMTIwMzYsInN1YiI6IjY0ZGVmZGFmLTczZjgtNDA0My1iMWI3LTJlNzMxN2JjMWJjNyJ9.K_Bb0yBDiB9p4rCywQ7t16B1eAgYC1OQkCQjv5xE-Hs'
    //           }
    //         }
    //       )
    //         .then((data) => data.json())
    //         .then((data) => console.log(data));
    //     });

    //   await fetch(
    //     'http://localhost:3000/664/products/24a355ea-1e00-4030-b1bd-7295b66f7c9b'
    //   )
    //     .then((data) => data.json())
    //     .then((data) => console.log(data));
    // }
  }
};
</script>

<style lang="scss" scoped>
.feedback__container {
  padding: 45px;
}

.feedback__btn {
  width: 100%;
}

.feedback__icon {
  position: absolute;
  right: 20px;
  top: 20px;
}
</style>
