<template>
  <v-sheet elevation="1" class="my-1 pa-4">
    <span class="body-1 period-title">{{ city.name }}</span>
  </v-sheet>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    cityId: {
      required: true,
      type: Number,
    },
  },
  computed: {
    city() {
      return this.$store.state.deck[this.cityId] || {
        id: -1,
        name: 'Unknown City',
      };
    },
  },
});
</script>

<style scoped>
span.period-title {
  min-width: 9em;
}
</style>
