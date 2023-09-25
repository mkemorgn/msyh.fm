import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import '/dist/output.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitch } from '@fortawesome/free-brands-svg-icons'
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import "@fontsource/barlow";
import "@fontsource/barlow/800.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/800-italic.css";
import "@fontsource/barlow/600-italic.css";
import { vDraggerBeforeMount, vDraggerUnMount } from 'v3-dragger';


const app = createApp(App)
      .use(router)
      .component('font-awesome-icon', FontAwesomeIcon)
      .directive('dragger', {
            beforeMount: vDraggerBeforeMount,
            unmounted: vDraggerUnMount,
      })
      .mount('#app');


library.add(
      faInstagram, faTwitter, faFacebook, faYoutube, faTwitch, faSoundcloud, faDiscord
)
