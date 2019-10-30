import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.red.darken1,
        secondary: colors.lightGreen.darken1,
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
