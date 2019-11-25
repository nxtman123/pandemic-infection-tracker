<template>
  <v-container class="pb-12">
    <h2 class="title">Cities</h2>
    <city-card-count-control
      v-for="city in cities"
      :key="city.id"
      :city="city"
    ></city-card-count-control>
    <new-city-button/>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import CityCardCountControl from '../components/CityCardCountControl.vue';
import NewCityButton from '../components/NewCityButton.vue';

export default Vue.extend({
  components: {
    CityCardCountControl,
    NewCityButton,
  },
  computed: {
    ...mapGetters({
      cities: 'citiesAlphabetically',
    }),
  },
});
</script>
