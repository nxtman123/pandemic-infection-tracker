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
    <h2 class="headline mb-2">Discard pile</h2>
    <v-sheet class="mb-3 pa-3">
      <div v-if="model.length !== 1">
        <city-card
          v-for="card in model[0].cards"
          :key="card.position"
          :card="card"
        />
      </div>
    </v-sheet>
    <h2 class="headline mt-6 mb-2">Draw pile</h2>
    <v-sheet
      class="mb-3 pa-3"
      v-for="segment in model.slice(model.length !== 1 ? 1 : 0)"
      :key="segment.id"
    >
      <city-card
        v-for="card in segment.cards"
        :key="card.position"
        :card="card"
      />
    </v-sheet>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import CityCard from '../components/CityCard.vue';
import EmptyPageMessage from '../components/EmptyPageMessage.vue';

export default Vue.extend({
  components: {
    CityCard,
    EmptyPageMessage,
  },
  computed: {
    ...mapGetters([
      'model',
    ]),
  },
});
</script>

<style scoped lang="stylus">
.card-group
  border: 1px solid white
</style>
