<template>
  <empty-page-message
    v-if="this.forecast === null"
    icon-name="mdi-card-bulleted-off"
    message="Bad Card"
  >
    There was an unexpected card in the record.
  </empty-page-message>
  <empty-page-message
    v-else-if="this.forecast.length === 0"
    icon-name="mdi-view-list"
    message="No forecast"
  >
    Use the Setup page to add cards to the deck.
  </empty-page-message>
  <v-container v-else>
    <v-slider
      v-model="infectionRate"
      min="2"
      max="5"
      thumb-label="always"
      hide-details
      ticks="always"
      label="Infection Rate"
      color="secondary"
      class="mt-8"
    ></v-slider>
    <v-data-table
      :headers="headers"
      :items="this.forecast"
      sort-by="p1"
      sort-desc
      disable-filtering
      disable-pagination
      hide-default-footer
      fixed-header
      dense
    ></v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
// noinspection TypeScriptCheckImport
import EmptyPageMessage from '@/components/EmptyPageMessage.vue';

export default Vue.extend({
  components: {
    EmptyPageMessage,
  },
  data: () => ({
    infectionRate: 1,
  }),
  computed: {
    headers() {
      const r: object[] = [{
        text: 'City',
        align: 'left',
        value: 'name',
      }];
      const ir = this.infectionRate;
      for (let k = ir; k <= 8 * ir; k += ir) {
        r.push({
          text: `${k} (cards)`,
          value: `c${k}`,
          align: 'right',
        });
        r.push({
          text: `${k} (%)`,
          value: `p${k}`,
          align: 'left',
        });
      }
      r.push({
        text: 'Bottom Card',
        value: 'bottomCardChance',
      });
      console.log(r);
      return r;
    },
    forecast() {
      return this.$store.getters.forecast(this.infectionRate);
    },
  },
});
</script>
