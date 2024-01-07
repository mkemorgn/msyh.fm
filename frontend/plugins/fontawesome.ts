import { defineNuxtPlugin } from 'nuxt/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

export default defineNuxtPlugin((nuxtApp) => {
  library.add(fab, faLink);

  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon);
});

