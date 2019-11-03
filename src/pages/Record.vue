<template>
  <v-container class="pb-12 mb-12">
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
