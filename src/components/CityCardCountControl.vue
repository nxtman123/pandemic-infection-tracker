<template>
  <v-sheet elevation="1" class="my-1 pa-4 d-flex align-center">
    <span class="body-1 period-title">{{ city.name }}</span>
    <v-slider
      max="6"
      thumb-label="always"
      hide-details
      class="mt-4"
      color="secondary"
      label="Infection Cards"
      :value="city.count"
      @change="update"
    ></v-slider>
  </v-sheet>
</template>

<script>
import Vue from 'vue';
import { mapMutations } from 'vuex';

export default Vue.extend({
  props: {
    city: {
      required: true,
      type: Object,
    },
  },
  methods: {
    update(count) {
      this.$store.dispatch('updateCity', {
        ...this.city,
        count,
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
