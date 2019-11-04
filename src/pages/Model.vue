<template>
  <v-container
    :class="{ 'fill-height': this.model === null || this.model.length === 0 }"
  >
    <div
      v-if="this.model === null"
      class="mx-auto d-flex flex-column justify-center align-center"
    >
      <v-icon large class="mb-2">mdi-alert-circle-outline</v-icon>
      <p class="subtitle-2">Error</p>
      <p class="caption">
        There was an unexpected card in the record.
      </p>
    </div>
    <div
      v-else-if="this.model.length === 0"
      class="mx-auto d-flex flex-column justify-center align-center"
    >
      <v-icon large class="mb-2">mdi-image-filter-none</v-icon>
      <p class="subtitle-2">No model</p>
      <p class="caption">
        Use the Setup page to add cards to the deck.
      </p>
    </div>
    <v-sheet
      class="my-2 pa-1"
      :color="segment.current ? 'secondary' : 'primary'"
      v-for="segment in this.model"
      :key="segment.id"
    >
      <v-sheet
        elevation="1"
        class="d-block ma-1 pa-2"
        v-for="card in segment.cards"
        :key="card.position"
      >
        <span class="body-1">{{ card.name }}</span>
      </v-sheet>
    </v-sheet>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters([
      'model',
    ]),
  },
});
</script>
