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
    <v-data-table
      :headers="headers"
      :items="this.forecast"
      sort-by="8c"
      sort-desc
      disable-filtering
      disable-pagination
      hide-default-footer
      fixed-header
    ></v-data-table>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
import EmptyPageMessage from '@/components/EmptyPageMessage.vue';

export default Vue.extend({
  components: {
    EmptyPageMessage,
  },
  computed: {
    headers: () => {
      const r: object[] = [{
        text: 'City',
        align: 'left',
        value: 'name',
      }];
      for (let k = 1; k <= 8; k += 1) {
        r.push({
          text: `${k} (cards)`,
          value: `${k}c`,
        });
        r.push({
          text: `${k} (%)`,
          value: `${k}p`,
        });
      }
      r.push({
        text: 'Bottom Card',
        value: 'bottomCardChance',
      });
      console.log(r);
      return r;
    },
    ...mapGetters([
      'forecast',
    ]),
  },
});
</script>
