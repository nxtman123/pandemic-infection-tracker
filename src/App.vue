<template>
  <in-game-layout>
    <template v-slot:title>
      {{ title }}
    </template>
    <router-view></router-view>
  </in-game-layout>
</template>

<script>
import Vue from 'vue';
import InGameLayout from '@/layouts/InGameLayout.vue';

export default Vue.extend({
  components: { InGameLayout },
  computed: {
    title() {
      return this.$route.meta && this.$route.meta.title;
    },
    appState() {
      return this.$store.state;
    },
  },
  mounted() {
    this.$store.dispatch('startup');
  },
  watch: {
    appState() {
      this.$store.dispatch('persistState');
    },
  },
});
</script>
