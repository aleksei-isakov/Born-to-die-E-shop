<template>
  <v-dialog :value="isDialogActive" width="600px" @input="closeDialog">
    <v-form ref="form" v-model="isValid" @submit.prevent="onSubmitSendFeedback">
      <v-card>
        <v-container class="feedback__container">
          <div class="feedback__icon" @click="closeDialog">
            <v-icon color="blue">fas fa-times</v-icon>
          </div>

          <v-row>
            <v-col cols="12">
              <v-text-field
                id="feedback-v-text-field"
                v-model="form.reviewerName"
                label="Enter your name"
                :rules="reviewerNameRules"
                @focus="onFocusChangeName"
                @change="onChangeAddAnonName"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-textarea
                id="feedback-v-textarea"
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
                :disabled="!isValid"
                class="feedback__btn"
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
import { BaseTextFilledButton } from '@/base_components/';
import { mapGetters, mapActions } from 'vuex';
import {
  MIN_LENGTH_OF_REVIEWER_NAME,
  MIN_LENGTH_OF_COMMENT,
  MAX_LENGTH_OF_COMMENT
} from './helper';

export default {
  name: 'FeedbackForm',

  components: {
    BaseTextFilledButton
  },

  props: {
    isDialogActive: {
      type: Boolean,
      required: true,
      default: false
    }
  },

  data() {
    return {
      isValid: false,
      form: {
        reviewerName: null,
        comment: null,
        date: null
      },
      reviewerNameRules: [
        (reviewerName) =>
          !reviewerName ||
          reviewerName.length >= MIN_LENGTH_OF_REVIEWER_NAME ||
          `Name must be more than ${MIN_LENGTH_OF_REVIEWER_NAME} characters`
      ],
      commentRules: [
        (comment) => !!comment || 'Comment is required',
        (comment) =>
          (comment &&
            comment.length >= MIN_LENGTH_OF_COMMENT &&
            comment.length <= MAX_LENGTH_OF_COMMENT &&
            typeof comment === 'string') ||
          `Comment must be more than ${MIN_LENGTH_OF_COMMENT} characters`
      ]
    };
  },

  computed: {
    ...mapGetters('PdpPageModule', ['productInfo', 'isError'])
  },

  methods: {
    ...mapActions('PdpPageModule', [
      'updateProductInfoWithNewFeedback',
      'addFeedbackIntoProductInfo'
    ]),

    closeDialog() {
      this.$emit('close');
    },

    onSubmitClearFormData() {
      this.$refs.form.reset();
    },

    onFocusChangeName() {
      this.form.reviewerName = '';
    },

    onChangeAddAnonName() {
      if (this.form.reviewerName === '') {
        this.form.reviewerName = 'Anonymous';
      }
    },

    setFormCurrentDate() {
      this.form.date = new Date();
    },

    async onSubmitSendFeedback() {
      this.setFormCurrentDate();
      this.addFeedbackIntoProductInfo(Object.assign({}, this.form));

      const payload = {
        productId: this.$route.params.id,
        updatedProductInfo: this.productInfo
      };

      await this.updateProductInfoWithNewFeedback(payload);

      this.onSubmitClearFormData();

      if (!this.isError) {
        this.closeDialog();
      }
    }
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
  cursor: pointer;
}
</style>
