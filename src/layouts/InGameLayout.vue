<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      flat
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-toolbar-title>
        <span class="headline font-weight-bold">
          <slot name="title">
            Pandemic Infection Tracker
          </slot>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <drawer-navigation/>
      <v-divider/>
      <infection-rate-control/>
    </v-navigation-drawer>
    <v-content>
      <slot></slot>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue';
import DrawerNavigation from '../components/DrawerNavigation.vue';
import InfectionRateControl from '../components/InfectionRateControl.vue';

export default Vue.extend({
  components: {
    DrawerNavigation,
    InfectionRateControl,
  },
  data() {
    return {
      drawer: null,
    };
  },
});
</script>
