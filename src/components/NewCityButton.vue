<template>
  <v-dialog
    v-model="dialog"
    width="50em"
  >
    <template v-slot:activator="{ on }">
      <v-btn fixed fab bottom right color="secondary" v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title>New City</v-card-title>
      <v-form
        ref="form"
        v-model="valid"
        @submit.prevent="newCity"
      >
        <v-card-text>
          <city-fields
            ref="fields"
            :autofocus-name="dialog"
            v-model="city"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            text
            type="submit"
          >
            Add city
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import Vue from 'vue';
import CityFields from './CityFields.vue';

const NEW_CITY = {
  name: '',
  color: 'gameBlue',
  cardCount: 1,
};

export default Vue.extend({
  components: {
    CityFields,
  },
  data: () => ({
    dialog: false,
    city: { ...NEW_CITY },
    valid: true,
  }),
  methods: {
    newCity() {
      if (this.$refs.form.validate()) {
        this.dialog = false;
        this.$store.commit('newCity', this.city);
      }
    },
  },
  watch: {
    dialog(willBeOpen, wasOpen) {
      if (!wasOpen && willBeOpen) {
        if (this.$refs.form) {
          this.$refs.form.reset();
          this.city = { ...NEW_CITY };
        }
      }
    },
  },
});
</script>
