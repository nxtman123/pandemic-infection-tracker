<template>
  <v-dialog
    scrollable
    max-width="15em"
    v-model="dialog"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        depressed
        color="secondary"
        width="100%"
        class="d-block mt-2"
        v-on="on"
      ><v-icon>mdi-plus</v-icon></v-btn>
    </template>
    <v-card>
      <v-card-title>Draw Card</v-card-title>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          v-for="city in this.cities"
          :key="city.id"
          @click="drawCard(city)"
        >
          <v-list-item-content>{{ city.name }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  props: {
    periodId: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
  }),
  computed: {
    ...mapGetters({
      cities: 'citiesAlphabetically',
    }),
  },
  methods: {
    drawCard(city) {
      this.dialog = false;
      this.$store.commit('addCardToPeriod', {
        cityId: city.id,
        periodId: this.periodId,
      });
    },
  },
});
</script>
