<template>
  <v-sheet class="my-1 pa-4">
    <span class="headline period-title">{{ title }}</span>
    <city-card
      v-for="{ cityId, index } in cards"
      :key="index"
      :cityId="cityId"
    ></city-card>
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
      const a = this.period.cards.map((cityId, index) => ({ cityId, index }));
      console.log(a);
      return a;
    },
  },
});
</script>

<style scoped>
span.period-title {
  min-width: 9em;
}
</style>
