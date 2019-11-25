<template>
  <v-dialog
    v-model="dialog"
    scrollable
    width="15em"
  >
    <template v-slot:activator="{ on }">
      <v-btn
        outlined
        color="secondary"
        width="100%"
        class="d-block mt-3"
        v-on="on"
      >
        <v-icon left>mdi-plus</v-icon> Draw Card
      </v-btn>
    </template>

    <v-card>
      <v-card-title>Draw Card</v-card-title>
      <v-divider></v-divider>
      <v-list class="overflow-y-auto">
        <v-list-item
          v-for="city in cities"
          :key="city.id"
          @click="drawCard(city)"
        >
          <v-list-item-icon>
            <v-icon :color="city.color">mdi-map-marker</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ city.name }}
            </v-list-item-title>
          </v-list-item-content>
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
