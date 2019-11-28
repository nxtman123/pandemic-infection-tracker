<template>
  <v-sheet class="mb-3 pa-3">
    <div class="d-flex justify-space-between">
      <h2 class="headline">{{ title }}</h2>
      <v-btn icon @click="deletePeriod"><v-icon>mdi-close</v-icon></v-btn>
    </div>
    <city-card
      show-delete-button
      v-for="card in period.cards"
      :key="card.position"
      :card="card"
      @deleteCard="deleteCard(card)"
    ></city-card>
    <draw-card-button :period-id="period.id"></draw-card-button>
  </v-sheet>
</template>

<script>
import Vue from 'vue';
import CityCard from './CityCard.vue';
import DrawCardButton from './DrawCardButton.vue';

export default Vue.extend({
  components: {
    DrawCardButton,
    CityCard,
  },
  props: {
    period: {
      required: true,
      type: Object,
    },
  },
  computed: {
    title() {
      return `Period ${this.period.id + 1}`;
    },
  },
  methods: {
    deleteCard(card) {
      this.$store.commit('deleteCard', card);
    },
    deletePeriod() {
      this.$store.commit('deletePeriod', this.period);
    },
  },
});
</script>
