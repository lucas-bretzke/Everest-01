import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'
import UsersList from '../views/Cadastro/ListingScreen/UsersList.vue'
// import CreateUser from '../views/Register.vue'
// import UserDetails from '../views/UserDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  },

  {
    path: '/LoginEmail',
    name: 'LoginEmail',

    component: () => import('../views/Login/LoginEmail')
  },
  {
    path: '/LoginPassword',
    name: 'LoginPassword',

    component: () => import('../views/Login/LoginPassword')
  },

  {
    path: '/DadosDeContato',
    name: 'DadosDeContato',

    component: () => import('../views/Cadastro/DadosDeContato')
  },
  {
    path: '/DadosPessoais',
    name: 'DadosPessoais',

    component: () => import('../views/Cadastro/DadosPessoais')
  },
  {
    path: '/CadastroFinalizado',
    name: 'CadastroFinalizado',

    component: () => import('../views/Cadastro/CadastroFinalizado')
  },
  ////listagem Screen////
  {
    path: '/UsersList',
    name: 'UsersList',
    component: UsersList
  },
  // {
  //   path: '/register',
  //   name: 'cadastro',
  //   component: CreateUser
  // },
  // {
  //   path: '/users/:id',
  //   name: 'userDetails',
  //   component: UserDetails
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
