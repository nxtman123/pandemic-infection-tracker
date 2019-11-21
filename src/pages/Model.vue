<template>
  <empty-page-message
    v-if="model === null"
    icon-name="mdi-card-bulleted-off"
    message="Bad Card"
  >
    There was an unexpected card in the record.
  </empty-page-message>
  <empty-page-message
    v-else-if="model.length === 0"
    icon-name="mdi-image-filter-none"
    message="No model"
  >
    Use the Setup page to add cards to the deck.
  </empty-page-message>
  <v-container v-else>
    <v-sheet
      class="my-2 pa-1"
      :class="{ 'mb-8': segment.current }"
      :color="segment.current ? 'secondary' : 'primary'"
      v-for="segment in model"
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
import EmptyPageMessage from '@/components/EmptyPageMessage.vue';

export default Vue.extend({
  components: {
    EmptyPageMessage,
  },
  computed: {
    ...mapGetters([
      'model',
    ]),
  },
});
</script>
