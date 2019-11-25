<template>
  <div>
    <v-divider></v-divider>
    <city-fields
      show-delete-button
      prevent-empty-name
      :city="city"
      @change="updateCity"
      @deleteCity="deleteCity"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import CityFields from './CityFields.vue';

export default Vue.extend({
  components: {
    CityFields,
  },
  props: {
    city: {
      required: true,
      type: Object,
    },
  },
  methods: {
    updateCity(city) {
      this.$store.commit('updateCity', {
        ...city,
      });
    },
    deleteCity() {
      this.$store.commit('deleteCityById', this.city.id);
    },
  },
});
</script>
