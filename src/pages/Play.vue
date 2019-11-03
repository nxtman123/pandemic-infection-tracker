<template>
  <v-container class="pb-12 mb-12">
    <period-list v-for="period in periods" :period="period" :key="period.id"></period-list>
    <v-btn
      fixed
      fab
      bottom
      right
      color="secondary"
      @click="addPeriod"
    >
      <v-icon x-large>mdi-biohazard</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { mapGetters, mapMutations } from 'vuex';
import PeriodList from '@/components/PeriodList.vue';

export default Vue.extend({
  components: {
    PeriodList,
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
