<template>
  <v-container>
    <h2 class="title">Cities</h2>
    <city-card-count-control
      v-for="city in this.cities"
      :key="city.id"
      :city="city"
    ></city-card-count-control>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import CityCardCountControl from '@/components/CityCardCountControl.vue';

export default Vue.extend({
  components: {
    CityCardCountControl,
  },
  computed: {
    ...mapGetters({
      cities: 'citiesAlphabetically',
    }),
  },
});
</script>
