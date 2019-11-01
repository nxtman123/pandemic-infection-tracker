<template>
  <v-sheet
    elevation="1"
    class="my-1 pa-2 d-flex justify-space-between align-baseline"
    color="primary"
  >
    <span class="body-1 period-title">{{ city.name }}</span>
    <div>
      <v-btn icon><v-icon>mdi-close</v-icon></v-btn>
    </div>
  </v-sheet>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    index: {
      required: true,
      type: Number,
    },
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
