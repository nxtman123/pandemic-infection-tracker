<template>
  <v-sheet
    elevation="2"
    class="my-2 d-flex justify-space-between align-top card"
    :color="card.color"
  >
    <v-icon
      class="background-decal"
      :class="card.color === 'gameYellow' ? 'gameBlack--text' : undefined"
    >mdi-biohazard</v-icon>
    <span
      class="title mx-3 mt-2 mb-5"
      :class="card.color === 'gameYellow' ? 'gameBlack--text' : undefined"
    >{{ card.name }}</span>
    <div v-if="showDeleteButton">
      <v-btn
        icon
        :class="card.color === 'gameYellow' ? 'gameBlack--text' : undefined"
        @click="deleteCard"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
  </v-sheet>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  props: {
    card: {
      required: true,
      type: Object,
    },
    showDeleteButton: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    deleteCard() {
      this.$emit('deleteCard');
    },
  },
});
</script>

<style scoped lang="stylus">
.card
  position relative
  overflow hidden

.background-decal
  font-size 70pt
  position absolute
  bottom -0.225em
  right 20%
  opacity 0.4
  transform rotate(17.5deg)

</style>
