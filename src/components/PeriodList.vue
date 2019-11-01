<template>
  <v-sheet class="my-1 pa-4">
    <span class="headline period-title">{{ title }}</span>
    <city-card
      v-for="{ cityId, index } in cards"
      :key="index"
      :cityId="cityId"
    ></city-card>
    <v-btn
      depressed
      color="secondary"
      width="100%"
      class="d-block"
    ><v-icon>mdi-plus</v-icon></v-btn>
  </v-sheet>
</template>

<script>
import Vue from 'vue';
import CityCard from '@/components/CityCard.vue';

export default Vue.extend({
  components: {
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
    cards() {
      return this.period.cards.map((cityId, index) => ({ cityId, index }));
    },
  },
});
</script>

<style scoped>
span.period-title {
  min-width: 9em;
}
</style>
