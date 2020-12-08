import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import CrudFilier from '../views/Crud_Filier.vue'
import CrudEmploi from '../views/Crud_Emploi.vue'
import CrudProf from '../views/Crud_Prof.vue'
// import { requireAuth } from '../myauth/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/filier',
        name : 'Filier',
        component : CrudFilier,
        // beforeEnter:  requireAuth
      },
      {
        path: '/profs',
        name : 'Profs',
        component : CrudProf,
        // beforeEnter:  requireAuth
      },
      {
        path : '/create_emploi',
        name : 'CrudEmploi',
        component : CrudEmploi,
        // beforeEnter:  requireAuth
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/student',
    name: 'Student',
    component: () => import('../views/Emploi.vue')
  },
  
  // otherwise redirect to home
  // { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
