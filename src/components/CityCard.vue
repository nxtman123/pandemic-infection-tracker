<template>
  <v-sheet
    elevation="1"
    class="my-1 px-3 py-1 d-flex justify-space-between align-baseline"
    :color="card.color"
  >
    <span class="body-1 period-title">{{ card.name }}</span>
    <div v-if="showDeleteButton">
      <v-btn
        icon
        @click="deleteCard"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    card: {
      required: true,
      type: Object,
    },
    showDeleteButton: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    deleteCard() {
      this.$emit('deleteCard');
    },
  },
});
</script>

<style scoped>
span.period-title {
  min-width: 8em;
}
</style>
