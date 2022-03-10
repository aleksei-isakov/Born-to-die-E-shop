<template>
  <div>
    <div v-if="isEditable">
      <EditableRating />
    </div>
    <div v-else>
      <ShownRating :rating="rating" />
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
  }
};
</script>
