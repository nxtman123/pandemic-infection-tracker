<template>
  <v-container>
    <h2 class="title">Cities</h2>
    <city-card v-for="city in cities" :key="city.id" :city="city" ></city-card>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import CityCard from '@/components/CityCard.vue';

export default Vue.extend({
  components: {
    CityCard,
  },
  computed: {
    ...mapGetters({
      cities: 'citiesAlphabetically',
    }),
  },
});
</script>
