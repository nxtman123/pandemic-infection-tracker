import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#0c103b',
        secondary: colors.green.darken2,
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
