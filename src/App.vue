<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      color="primary"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="headline">
        <span class="font-weight-bold">{{ title }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list>
        <v-list-item link to="deck">
          <v-list-item-action>
            <v-icon>mdi-cards</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Infection Deck
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="gameplay">
          <v-list-item-action>
            <v-icon>mdi-playlist-edit</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            Gameplay
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="forecast">
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
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  drawer = null;

  get title() {
    return this.$route.name;
  }
}
</script>
