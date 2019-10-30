<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="headline">
        <span class="font-weight-black">PANDEMIC</span> Infection and Epidemic Tracker
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-cards</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Starting card counts
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-playlist-edit</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Record cards
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-binoculars</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Forecast
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data: () => ({
    drawer: null,
  }),
});
</script>
