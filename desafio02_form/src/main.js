import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, } from '@fortawesome/vue-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faXmark, faAngleDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons'


library.add(faEnvelope, faWhatsapp, faXmark, faAngleDown, faArrowLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)




// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')