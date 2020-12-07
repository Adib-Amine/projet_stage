<template>
        <div class="container">
            <Navbar :nav-links="navLinks"  
               :image-path="require('../assets/logo.png')"                   
            />
            <!-- <div class="row justify-content-center">
                <h1>Admin</h1>
            </div>
            <div class="row justify-content-center mt-5">
                <h6>Your Token : </h6><br>
            </div>
            <div class="row">
                <p>{{$myauth.access_token}}</p>
            </div> -->
            <router-view/>
        </div>
</template>

<script>
import Navbar from '../components/layout/ResponsiveNavBar'
export default {
    components: {
        Navbar
    },
    data (){
        return {
            navLinks: [{
                path: '/admin',
                text: 'Home',
                icon: 'ion-home'
              },
              {
                path: '/filier',
                text: 'Filier',
                icon: 'ion-university'
              }, {
                path: '/profs',
                text: 'Profs',
                icon: 'ion-person-stalker'
              }, {
                path: '/create_emploi',
                text: 'CrudEmploi',
                icon: 'ion-calendar'
              }
            ],
            items: [{
                message: "Accueil",
                href: "/",
                icon: "fa fa-user"
              },
              {
                message: "CRUD profs",
                href: "/about",
                icon: "fa fa-user"
              },
              {
                message: "CRUD classes",
                href: "#hala3",
                icon: "fa fa-user"
              },
              {
                message: "CRUD étudiants",
                href: "#hala4",
                icon: "fa fa-user"
              },
              {
                message: "CRUD vacances",
                href: "#hala5",
                icon: "fa fa-user"
              },
              {
                message: "Calendrier",
                href: "/emploi",
                icon: "fa fa-user"
              }
            ]
        }
    }
}
</script>

// const linksStore = {
//   data: {
//     items: [
//       { message: "Accueil", href: "/" ,icon:"fa fa-user"},
//       { message: "CRUD profs", href: "/about",icon:"fa fa-user" },
//       { message: "CRUD classes", href: "#hala3",icon:"fa fa-user" },
//       { message: "CRUD étudiants", href: "#hala4",icon:"fa fa-user" },
//       { message: "CRUD vacances", href: "#hala5",icon:"fa fa-user" },
//       { message: "Calendrier", href: "/emploi",icon:"fa fa-user" }
//     ]
//   }
// };
// export default linksStore;