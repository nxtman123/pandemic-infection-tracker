<template>
  <div class="px-4 py-2 d-flex flex-column">
    <span class="body-1 mb-2">Infection Rate</span>
    <div class="d-flex align-baseline">
      <v-btn
        class="mr-2 body-2"
        fab
        small
        :color="infectionRate === 2 ? 'secondary' : 'primary'"
        @click="() => { this.$store.commit('setInfectionRate', 2)}"
      >
        2
      </v-btn>
      <v-btn
        class="mr-2 body-2"
        fab
        small
        :color="infectionRate === 3 ? 'secondary' : 'primary'"
        @click="() => { this.$store.commit('setInfectionRate', 3)}"
      >
        3
      </v-btn>
      <v-btn
        class="mr-2 body-2"
        fab
        small
        :color="infectionRate === 4 ? 'secondary' : 'primary'"
        @click="() => { this.$store.commit('setInfectionRate', 4)}"
      >
        4
      </v-btn>
      <v-btn
        class="mr-2 body-2"
        fab
        small
        :color="infectionRate === 5 ? 'secondary' : 'primary'"
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
