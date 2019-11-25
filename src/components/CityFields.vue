<template>
  <div class="d-flex flex-wrap align-baseline justify-space-between">
    <div class="flex-grow-1">
      <v-text-field
        label="Name"
        class="mr-2"
        spellcheck
        :rules="nameRules"
        :value="city.name"
        @change="changeName"
      ></v-text-field>
    </div>

    <div class="d-flex flex-wrap align-baseline">
      <div class="mr-2">
        <v-avatar
          class="mr-2"
          :color="city.color"
        >
          <v-icon>mdi-palette</v-icon>
        </v-avatar>
        <v-btn
          class="mr-2"
          icon
          color="gameBlue"
          @click="() => changeColor('gameBlue')"
        >
          <v-icon>mdi-water</v-icon>
        </v-btn>
        <v-btn
          class="mr-2"
          icon
          color="gameYellow"
          @click="() => changeColor('gameYellow')"
        >
          <v-icon>mdi-water</v-icon>
        </v-btn>
        <v-btn
          class="mr-2"
          icon
          color="gameBlack"
          @click="() => changeColor('gameBlack')"
        >
          <v-icon>mdi-water</v-icon>
        </v-btn>
        <v-btn
          icon
          color="gameRed"
          @click="() => changeColor('gameRed')"
        >
          <v-icon>mdi-water</v-icon>
        </v-btn>
      </div>

      <div class="mr-2">
        <span class="body-1">Infection cards</span>
        <v-btn
          icon
          @click="decrement"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <span class="body-1 font-weight-bold d-inline-block text-center card-count">
          {{ city.cardCount }}
        </span>
        <v-btn
          icon
          @click="increment"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

const CHANGE_EVENT = 'change';

export default Vue.extend({
  model: {
    prop: 'city',
    event: CHANGE_EVENT,
  },
  props: {
    city: {
      required: true,
      type: Object,
    },
  },
  data: () => ({
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters',
    ],
  }),
  methods: {
    changeName(name) {
      this.$emit(CHANGE_EVENT, {
        ...this.city,
        name,
      });
    },
    changeColor(color) {
      this.$emit(CHANGE_EVENT, {
        ...this.city,
        color,
      });
    },
    decrement() {
      if (this.city.cardCount > 0) {
        this.$emit(CHANGE_EVENT, {
          ...this.city,
          cardCount: Number.parseInt(this.city.cardCount, 10) - 1,
        });
      }
    },
    increment() {
      this.$emit(CHANGE_EVENT, {
        ...this.city,
        cardCount: Number.parseInt(this.city.cardCount, 10) + 1,
      });
    },
  },
});
</script>

<style scoped lang="stylus">
.card-count
  width 1.75em
</style>
