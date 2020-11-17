<template>
  <div id="app" class="bg-white">
      <Header />
    <router-view/>
  </div>
</template>
<script>
import Header from './components/layout/Header'
export default {
  name:"App",
  components:{
    Header
  },
  navLinks : [
        {
          path: '/',
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
</script>
<style>

</style>
