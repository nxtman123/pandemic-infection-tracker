<template>
  <v-container class="pb-12">
    <h2 class="title mb-2">Cities</h2>
    <city-control
      v-for="city in cities"
      :key="city.id"
      :city="city"
    ></city-control>
    <div class="mt-12"></div>
    <new-city-button/>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import CityControl from '../components/CityControl.vue';
import NewCityButton from '../components/NewCityButton.vue';

export default Vue.extend({
  components: {
    CityControl,
    NewCityButton,
  },
  computed: {
    ...mapGetters({
      cities: 'citiesAlphabetically',
    }),
  },
});
</script>
