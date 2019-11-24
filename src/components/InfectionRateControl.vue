<template>
  <div class="px-4 py-2 d-flex flex-column">
    <span class="body-1 mb-2">Infection Rate</span>
    <div class="d-flex align-baseline">
      <v-btn
        class="mr-2 body-2"
        color="secondary"
        fab
        small
        :outlined="infectionRate !== 2"
        :depressed="infectionRate === 2"
        @click="() => { this.$store.commit('setInfectionRate', 2)}"
      >
        2
      </v-btn>
      <v-btn
        class="mr-2 body-2"
        color="secondary"
        fab
        small
        :outlined="infectionRate !== 3"
        :depressed="infectionRate === 3"
        @click="() => { this.$store.commit('setInfectionRate', 3)}"
      >
        3
      </v-btn>
      <v-btn
        class="mr-2 body-2"
        color="secondary"
        fab
        small
        :outlined="infectionRate !== 4"
        :depressed="infectionRate === 4"
        @click="() => { this.$store.commit('setInfectionRate', 4)}"
      >
        4
      </v-btn>
      <v-btn
        class="mr-2 body-2"
        color="secondary"
        fab
        small
        :outlined="infectionRate !== 5"
        :depressed="infectionRate === 5"
        @click="() => { this.$store.commit('setInfectionRate', 5)}"
      >
        5
      </v-btn>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState([
      'infectionRate',
    ]),
  },
});
</script>
