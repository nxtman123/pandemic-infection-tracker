<template>
  <v-container class="fill-height">
    <div class="mx-auto d-flex flex-column justify-center align-center">
      <v-icon large class="mb-2">{{ iconName }}</v-icon>
      <p class="subtitle-2">{{ message }}</p>
      <p class="caption">
        <slot></slot>
      </p>
    </div>
  </v-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    iconName: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
});
</script>
