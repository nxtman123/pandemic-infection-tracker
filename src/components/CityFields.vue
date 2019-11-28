<template>
  <div class="d-flex flex-column flex-md-row align-stretch align-md-center mr--2">
    <div class="flex-grow-1 mr-4">
      <v-text-field
        :solo="!outlineNameField"
        :outlined="outlineNameField"
        flat
        hide-details
        class="my-2"
        color="secondary"
        label="Name"
        spellcheck
        :rules="nameRules"
        v-model="internalName"
        @change="changeName"
      ></v-text-field>
    </div>

    <div class="d-flex flex-wrap flex-shrink-0 align-center">

      <div class="mr-4 mb-3 mb-md-0">
        <v-avatar
          class="mr-2"
          :color="city.color"
        >
          <v-icon
            :color="city.color === 'gameYellow' ? 'gameBlack' : undefined"
          >mdi-palette</v-icon>
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

      <div class="d-flex flex-wrap align-center justify-space-between flex-grow-1">

        <v-sheet class="mr-4 mb-3 mb-md-0 py-1 px-3 secondary d-flex align-center">
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

        <div class="mr-4 mb-3 mb-md-0" v-if="showDeleteButton">
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
    outlineNameField: {
      default: false,
      type: Boolean,
    },
    preventEmptyName: {
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    deleteDialog: false,
    internalName: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 30) || 'Name must be less than 30 characters',
    ],
  }),
  created() {
    this.internalName = this.city.name;
  },
  watch: {
    city() {
      this.internalName = this.city.name;
    },
  },
  methods: {
    changeName(name) {
      if (name || !this.preventEmptyName) {
        this.$emit(CHANGE_EVENT, {
          ...this.city,
          name,
        });
      } else {
        this.internalName = this.city.name;
      }
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
      this.$emit('deleteCity');
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
