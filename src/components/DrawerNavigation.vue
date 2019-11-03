<template>
  <v-list>
    <v-list-item link to="setup">
      <v-list-item-action>
        <v-icon>mdi-numeric-1-box</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        Setup
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="record">
      <v-list-item-action>
        <v-icon>mdi-playlist-edit</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        Record
      </v-list-item-content>
    </v-list-item>
    <v-list-item link to="model">
      <v-list-item-action>
        <v-icon>mdi-cards</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        Model
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
</template>
