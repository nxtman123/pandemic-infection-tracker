<template>
  <empty-page-message
    v-if="periods.length === 0"
    icon-name="mdi-playlist-edit"
    message="No game history"
  >
    Press the <v-icon dense>mdi-biohazard</v-icon> button to start a period.
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
  </empty-page-message>
  <v-container class="pb-12" v-else>
    <period
      v-for="period in periods"
      :key="period.id"
      :period="period"
    ></period>
    <div id="bottom" class="mt-12"></div>
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
import Period from '../components/Period.vue';
import EmptyPageMessage from '../components/EmptyPageMessage.vue';

export default Vue.extend({
  components: {
    Period,
    EmptyPageMessage,
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
