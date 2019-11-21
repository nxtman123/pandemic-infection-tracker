<template>
  <v-sheet class="my-1 pa-4">
    <div class="d-flex justify-space-between mb-2">
      <span class="headline period-title">{{ title }}</span>
      <v-btn icon @click="remove"><v-icon>mdi-close</v-icon></v-btn>
    </div>
    <city-card
      v-for="card in period.cards"
      :key="card.position"
      :card="card"
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
    remove() {
      this.$store.commit('removePeriod', this.period);
    },
  },
});
</script>

<style scoped>
span.period-title {
  min-width: 9em;
}
</style>
