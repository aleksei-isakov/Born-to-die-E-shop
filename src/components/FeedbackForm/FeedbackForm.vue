<template>
  <v-dialog :value="isDialogActive" width="600px" @input="closeDialog">
    <v-form
      ref="form"
      v-model="isTextValid"
      @submit.prevent="onSubmitSendFeedback"
    >
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

            <v-col cols="12" align="start">
              <p class="rating__title">Rating</p>
              <rating-icon
                is-editable
                :rating="form.rating"
                @change-rating="onInputChangeRating"
              />
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
                :disabled="!isFormValid"
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
import RatingIcon from '@/components/RatingIcon/RatingIcon';
import { mapGetters, mapActions } from 'vuex';
import {
  MIN_LENGTH_OF_REVIEWER_NAME,
  MIN_LENGTH_OF_COMMENT,
  MAX_LENGTH_OF_COMMENT
} from './helper';

export default {
  name: 'FeedbackForm',

  components: {
    BaseTextFilledButton,
    RatingIcon
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
      isTextValid: false,
      form: {
        reviewerName: null,
        comment: null,
        date: null,
        rating: 0
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
    ...mapGetters('PdpPageModule', ['productInfo', 'isError']),

    isFormValid() {
      return this.isTextValid && this.form.rating;
    }
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
      this.form.rating = 0;
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
      this.form.date = `${new Date()}`;
    },

    onInputChangeRating(selectedRating) {
      this.form.rating = selectedRating;
    },

    async onSubmitSendFeedback() {
      this.setFormCurrentDate();
      this.addFeedbackIntoProductInfo({ ...this.form });

      const payload = {
        productId: this.$route.params.id,
        updatedProductInfo: this.productInfo
      };

      await this.updateProductInfoWithNewFeedback(payload);

      if (!this.isError) {
        this.onSubmitClearFormData();
        this.closeDialog();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/CustomVariables.scss';

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

.rating__title {
  margin-bottom: 5px;
  font-size: $font-size-basic;
  color: $font-color-subtitle;
}
</style>
