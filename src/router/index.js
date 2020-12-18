import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import CrudFilier from '../views/Crud_Filier.vue'
import Crud_Departement from '../views/Crud_Departement.vue'
import CrudEmploi from '../views/Crud_Emploi.vue'
import CrudProf from '../views/Crud_Prof.vue'
import ProfPanel from '../views/Prof_Panel.vue'
import UpdateProfile from '../views/UpdateProfile.vue'
import jwt_decode from "jwt-decode"

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
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/departement',
        name : 'Departement',
        component : Crud_Departement,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/profs',
        name : 'Profs',
        component : CrudProf,
        meta: {
          requireAuth: true
        }
      },
      {
        path : '/create_emploi',
        name : 'CrudEmploi',
        component : CrudEmploi,
        meta: {
          requireAuth: true
        }
      },
    ]
  },
  {
    path : '/prof_panel',
    name : 'ProfPanel',
    component : ProfPanel,
    children: [
      {
        path: '/update_profile',
        name : 'UpdateProfile',
        component : UpdateProfile,
        meta : {
          requireAuth: true
        }
      }
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

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
      if(localStorage.access_token) {
        let d = new Date(0)
        d.setUTCSeconds(jwt_decode(localStorage.access_token).exp);
        let n = new Date()
        let dif = d.getTime() - n.getTime()
        if (( dif / 1000) > 3600) {
          next({ path: "/login", query: { redirect: to.fullPath }});
        }else{
          // if(jwt_decode(localStorage.access_token).type != 'admin'){
          //   next({ path: "/"});
          // }
          next()
        }
      }else{
        next({ path: "/login", query: { redirect: to.fullPath }});
      }
  } else {
        next()
  }
}
)

export default router
