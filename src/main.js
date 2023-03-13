import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok, faPinterestP } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(
    faUserSecret, faMagnifyingGlass,
    faFacebookF, faInstagram, faTwitter, faYoutube, faTiktok, faPinterestP)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
