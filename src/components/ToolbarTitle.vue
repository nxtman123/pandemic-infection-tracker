<template>
  <v-toolbar-title>
        <span class="headline font-weight-bold">
          {{ value }}
        </span>
  </v-toolbar-title>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class ToolbarTitle extends Vue {
  @Prop({ required: true }) readonly value!: string;
}
</script>
