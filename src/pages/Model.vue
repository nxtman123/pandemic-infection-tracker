<template>
  <v-container>
    <v-list
      class="my-2"
      :color="segment.current ? 'primary' : null"
      v-for="segment in this.model"
      :key="segment.id"
    >
      <v-list-item v-for="card in segment.cards" :key="card.position">
        <v-list-item-content>{{ card.name }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapGetters([
      'model',
    ]),
  },
});
</script>
