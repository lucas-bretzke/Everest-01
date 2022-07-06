import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { createServer, Model } from 'miragejs'

import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, } from '@fortawesome/vue-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faXmark, faAngleDown, faArrowLeft, faLock, faEye, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'


library.add(faEnvelope, faWhatsapp, faXmark, faAngleDown, faArrowLeft, faLock, faEye, faAnglesLeft)
Vue.component('font-awesome-icon', FontAwesomeIcon)


createServer({
  models: {
    user: Model
  },
  seeds(server) {
    server.create("user", { fullname: "Ciquinha Gonzaga", cpf: "56717034092", cellphone: "80986882515", email: "xgonzaga@mail.com", confirmEmail: "xgonzaga@mail.com", birthDate: "1847-10-17" })
    server.create("user", { fullname: "Augustin Barrios", cpf: "35383938001", cellphone: "86986882519", email: "abarrios@mail.com", confirmEmail: "abarrios@mail.com", birthDate: "1885-05-05" })
    server.create("user", { fullname: "Heitor Villa-Lobos", cpf: "93525294050", cellphone: "80986882515", email: "hvlobos@mail.com", confirmEmail: "hvlobos@mail.com", birthDate: "1887-03-05" })
  },
  routes() {
    this.namespace = 'api'

    this.get('/users', (schema) => {
      return schema.users.all()
    }, { timing: 2000 })

    this.post('/users', (schema, request) => {
      let user = JSON.parse(request.requestBody)

      return schema.users.create(user)
    })

    this.get('/users/:id', (schema, request) => {
      let data = JSON.parse(request.requestBody)
      let id = request.params.id
      let user = schema.users.find(id)

      return user.update(data)
    }, { timing: 2000 })
  }
})

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')