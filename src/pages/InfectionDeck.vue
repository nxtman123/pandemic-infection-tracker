<template>
  <v-container>
    <period-list v-for="period in periods" :period="period" :key="period.id"></period-list>
  </v-container>
</template>

<script>
import Vue from 'vue';
import PeriodList from '@/components/PeriodList.vue';

export default Vue.extend({
  components: {
    PeriodList,
  },
  computed: {
    periods() {
      return this.$store.state.periods();
    },
  },
});
</script>
