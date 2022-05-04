import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
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
    name: 'Cadastro Finalizado',

    component: () => import('../views/Cadastro/CadastroFinalizado')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
