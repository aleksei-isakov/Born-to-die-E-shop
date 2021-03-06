<template>
  <v-dialog :value="isDialogActive" width="600px" @input="closeDialog">
    <v-form
      ref="form"
      v-model="isTextValid"
      class="feedback-form"
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
                class="feedback-form__name"
                @focus="onFocusChangeName"
                @change="onChangeAddAnonName"
              ></v-text-field>
            </v-col>

            <v-col cols="12" align="start">
              <p class="rating__title">Rating</p>
              <rating-icon
                is-editable
                class="feedback-form__rating"
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
                class="feedback-form__comment"
              ></v-textarea>
            </v-col>

            <v-col cols="12">
              <base-text-filled-button
                :disabled="!isFormValid"
                class="feedback__btn"
              >
                {{ getButtonText }}
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
    userId: {
      type: String,
      default: ''
    },

    isDialogActive: {
      type: Boolean,
      default: false
    },

    isEditing: {
      type: Boolean,
      default: false
    },

    feedback: {
      type: Object,
      default: () => ({
        reviewerName: null,
        comment: null,
        date: null,
        rating: 0
      })
    }
  },

  data() {
    return {
      isTextValid: false,
      form: this.feedback,
      reviewerNameRules: [
        (reviewerName) =>
          !reviewerName ||
          reviewerName.length >= MIN_LENGTH_OF_REVIEWER_NAME ||
          `Name must be more than ${MIN_LENGTH_OF_REVIEWER_NAME} characters`
      ],
      commentRules: [
        (comment) => !!comment || 'Comment is required',
        (comment) =>
          (comment && comment.length >= MIN_LENGTH_OF_COMMENT) ||
          `Comment must be more than ${MIN_LENGTH_OF_COMMENT} characters`,

        (comment) =>
          (comment && comment.length <= MAX_LENGTH_OF_COMMENT) ||
          `Comment must be less than ${MAX_LENGTH_OF_COMMENT} characters`
      ]
    };
  },

  computed: {
    isFormValid() {
      return this.isTextValid && this.form.rating;
    },

    getButtonText() {
      return this.isEditing ? 'SAVE' : 'ADD NEW FEEDBACK';
    }
  },

  watch: {
    feedback(value) {
      this.form = value;
    }
  },

  methods: {
    closeDialog() {
      this.$emit('close');
    },

    clearFormData() {
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

    onInputChangeRating(selectedRating) {
      this.form.rating = selectedRating;
    },

    async onSubmitSendFeedback() {
      this.$emit('submit', this.form);
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
