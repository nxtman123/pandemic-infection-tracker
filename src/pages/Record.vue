<template>
  <v-container class="pb-12" :class="{ 'fill-height': this.periods.length === 0 }">
    <div
      v-if="this.periods.length === 0"
      class="mx-auto d-flex flex-column justify-center align-center"
    >
      <v-icon large class="mb-2">mdi-playlist-edit</v-icon>
      <p class="subtitle-2">No game history</p>
      <p class="caption">
        Press the <v-icon dense>mdi-biohazard</v-icon> button to start a period.
      </p>
    </div>
    <period
      v-for="period in this.periods"
      :key="period.id"
      :period="period"
    ></period>
    <v-btn
      fixed
      fab
      bottom
      right
      color="secondary"
      @click="this.addPeriod"
    >
      <v-icon x-large>mdi-biohazard</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import Period from '@/components/Period.vue';

export default Vue.extend({
  components: {
    Period,
  },
  computed: {
    ...mapGetters([
      'periods',
    ]),
  },
  methods: {
    ...mapMutations([
      'addPeriod',
    ]),
  },
});
</script>
