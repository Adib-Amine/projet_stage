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
            navLinks : [
        {
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
          icon : 'ion-person-stalker'
        }, {
          path: '/create_emploi',
          text: 'CrudEmploi',
          icon: 'ion-calendar'
        }
      ]
        }
    }
}
</script>

<style>

</style>