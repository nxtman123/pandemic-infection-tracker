<template>
  <v-sheet elevation="1" class="my-1 pa-4 d-flex align-center">
    <span class="body-1 mr-3 city-title">{{ city.name }}</span>
    <v-slider
      max="6"
      thumb-label="always"
      hide-details
      class="mt-4"
      v-model="city.count"
    ></v-slider>
  </v-sheet>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    city: {
      required: true,
      type: Object,
    },
  },
});
</script>

<style scoped>
span.city-title {
  min-width: 9em;
}
</style>
