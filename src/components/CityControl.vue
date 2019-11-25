<template>
  <div>
    <v-divider></v-divider>
    <city-fields
      :show-delete-button="true"
      :city="city"
      @change="update"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import CityFields from './CityFields.vue';

export default Vue.extend({
  components: {
    CityFields,
  },
  props: {
    city: {
      required: true,
      type: Object,
    },
  },
  methods: {
    update(city) {
      this.$store.commit('updateCity', {
        ...city,
      });
    },
  },
});
</script>

<style scoped>
span.period-title {
  min-width: 9em;
}
</style>
