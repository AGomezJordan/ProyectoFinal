import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import es from 'vuetify/es5/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#042533',
        secondary: '#024059',
        accent: '#82B1FF',
        error: '#f44336',
        info: '#2196F3',
        success: '#4ebfb4',
        warning: '#FFC107'
      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
});
