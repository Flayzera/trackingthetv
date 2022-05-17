import VueRouter from 'vue-router'
import Vue from 'vue'

import HomeView from '../views/HomeView'
import AboutView from '../views/AboutView'
import ContactView from '../views/ContactView'
import LoginView from '../views/LoginView'
import RegisterView from '../views/RegisterView'
import InfoThisIsUs from '../views/InfoThisisus'
import InfoAboutTime from '../views/InfoAboutTime'
import InfoKimetsu from '../views/InfoKimetsu'
import InfoDrEstranho from '../views/InfoDrEstranho.vue'
import InfoEraDoGelo from '../views/InfoEraDoGelo'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/info1',
    name: 'InfoThisIsUs',
    component: InfoThisIsUs

  },
  {
    path: '/info2',
    name: 'InfoAboutTime',
    component: InfoAboutTime

  },
  {
    path: '/info3',
    name: 'InfoKimetsu',
    component: InfoKimetsu

  },
  {
    path: '/info4',
    name: 'InfoDrEstranho',
    component: InfoDrEstranho
  },
  {
    path: '/info5',
    name: 'InfoEraDoGelo',
    component: InfoEraDoGelo

  },
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router