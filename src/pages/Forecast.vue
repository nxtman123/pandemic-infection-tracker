<template>
  <empty-page-message
    v-if="this.forecast === null"
    icon-name="mdi-card-bulleted-off"
    message="Bad Card"
  >
    There was an unexpected card in the record.
  </empty-page-message>
  <empty-page-message
    v-else-if="this.forecast.length === 0"
    icon-name="mdi-view-list"
    message="No forecast"
  >
    Use the Setup page to add cards to the deck.
  </empty-page-message>
  <v-container v-else>
    <h1>Forecast page</h1>
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
      'forecast',
    ]),
  },
});
</script>
