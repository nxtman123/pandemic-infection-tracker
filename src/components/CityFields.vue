<template>
  <div class="d-flex flex-wrap align-center justify-space-between mr--2">
    <div class="flex-grow-1 mr-4">
      <v-text-field
        color="secondary"
        placeholder="Name"
        spellcheck
        :rules="nameRules"
        :value="city.name"
        @change="changeName"
      ></v-text-field>
    </div>

    <div class="d-flex flex-wrap align-center">
      <div class="mr-4">
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

      <v-sheet class="mr-4 py-1 px-3 secondary d-flex align-center">
        <v-icon>mdi-cards</v-icon>
        <v-btn
          icon
          @click="decrement"
        >
          <v-icon>mdi-minus</v-icon>
        </v-btn>
        <div
          class="title d-inline-block text-center card-count"
        >
          {{ city.cardCount }}
        </div>
        <v-btn
          icon
          @click="increment"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-sheet>

      <v-spacer></v-spacer>
      <div class="mr-4" v-if="showDeleteButton">
        <v-dialog
          v-model="deleteDialog"
          width="25em"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              @click="deleteDialog = true"
            >
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title>Delete {{ city.name }}?</v-card-title>
            <v-card-text>This cannot be undone</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                text
                @click="deleteDialog = false"
              >Cancel</v-btn>
              <v-btn
                depressed
                color="error"
                @click="deleteCity"
              >Delete</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
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
    showDeleteButton: {
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    deleteDialog: false,
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
    deleteCity() {
      this.$store.commit('deleteCityById', this.city.id);
    },
  },
});
</script>

<style scoped lang="stylus">
.mr--2
  margin-right -16px
.card-count
  width 1.75em
</style>
