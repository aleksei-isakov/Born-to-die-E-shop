<template>
  <div>
    <div v-if="isEditable">
      <editable-rating :rating="rating" @change-rating="onInputChangeRating" />
    </div>
    <div v-else>
      <shown-rating :rating="rating" />
    </div>
  </div>
</template>

<script>
import EditableRating from '@/components/RatingIcon/EditableRating.vue';
import ShownRating from '@/components/RatingIcon/ShownRating.vue';

export default {
  name: 'RatingIcon',

  components: { EditableRating, ShownRating },

  props: {
    isEditable: {
      type: Boolean,
      default: false
    },

    rating: {
      type: Number,
      default: 0
    }
  },

  methods: {
    onInputChangeRating(selectedRating) {
      this.$emit('change-rating', selectedRating);
    }
  }
};
</script>
