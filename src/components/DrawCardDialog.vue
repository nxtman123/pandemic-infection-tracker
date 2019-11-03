<template>
  <v-card>
    <v-card-title>Draw Card</v-card-title>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
        v-for="city in this.cities"
        :key="city.id"
        @click="drawCard(city.id)"
      >
        <v-list-item-content>{{ city.name }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
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
  computed: {
    ...mapGetters({
      cities: 'citiesAlphabetically',
    }),
  },
  methods: {
    drawCard(cityId) {
      this.$store.commit('addCardToPeriod', {
        cityId,
        periodId: this.periodId,
      });
      this.$emit('close');
    },
  },
});
</script>

<style scoped>

</style>
