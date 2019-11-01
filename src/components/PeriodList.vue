<template>
  <v-sheet elevation="1" class="my-1 pa-4">
    <span class="body-1 period-title">{{ period.id }}</span>
  </v-sheet>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    period: {
      required: true,
      type: Object,
    },
  },
});
</script>

<style scoped>
span.period-title {
  min-width: 9em;
}
</style>
