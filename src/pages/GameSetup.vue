<template>
  <v-container>
    <h2 class="title">Cities</h2>
    <v-sheet
      elevation="1"
      class="my-1 pa-2"
      v-for="city in cities"
      :key="city"
    >
      {{ city.name }}
    </v-sheet>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters({
      cities: 'citiesAlphabetically',
    }),
  },
});
</script>
