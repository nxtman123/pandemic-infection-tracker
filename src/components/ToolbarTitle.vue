<template>
  <v-toolbar-title>
        <span class="headline font-weight-bold">
          {{ value }}
        </span>
  </v-toolbar-title>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
});
</script>
