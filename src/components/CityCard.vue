<template>
  <v-sheet
    elevation="1"
    class="my-1 pa-2 d-flex justify-space-between align-baseline"
    color="primary"
  >
    <span class="body-1 period-title">{{ card.name }}</span>
    <div>
      <v-btn icon><v-icon>mdi-arrow-up</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-arrow-down</v-icon></v-btn>
    </div>
    <div>
      <v-btn icon><v-icon>mdi-close</v-icon></v-btn>
    </div>
  </v-sheet>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    card: {
      required: true,
      type: Object,
    },
  },
});
</script>

<style scoped>
span.period-title {
  min-width: 8em;
}
</style>
