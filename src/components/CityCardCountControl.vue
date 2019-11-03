<template>
  <v-sheet elevation="1" class="my-1 px-3 py-5 d-flex align-baseline">
    <span class="body-1 period-title">{{ city.name }}</span>
    <v-slider
      max="6"
      thumb-label="always"
      hide-details
      ticks="always"
      color="secondary"
      label="Infection Cards"
      :value="city.cardCount"
      @change="update"
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
  methods: {
    update(cardCount) {
      this.$store.commit('updateCity', {
        ...this.city,
        cardCount,
      });
    },
  },
});
</script>

<style scoped>
span.period-title {
  min-width: 9em;
}
</style>
