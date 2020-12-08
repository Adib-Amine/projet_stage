<template>
    <div class="hidden">
        <vs-navbar shadow square center-collapsed v-model="active">
            <!-- <template #left>
                <vs-button @click="activeSidebar = !activeSidebar" flat icon>
                    <i class='bx bx-menu'></i>
                </vs-button>
            </template> -->
            <vs-navbar-item :active="active == 'guide'" id="guide">
                Guide
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'docs'" id="docs">
                Documents
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'components'" id="components">
                Components
            </vs-navbar-item>
            <vs-navbar-item :active="active == 'license'" id="license">
                license
            </vs-navbar-item>
            <template #right>
                <vs-button flat v-if="!$myauth.isAuthenticated"><router-link to="/login">Login</router-link></vs-button>
                <vs-button  @click='logout' v-if="$myauth.isAuthenticated">Sign Out</vs-button>
                <!-- <vs-button >Login</vs-button> -->
            </template>
        </vs-navbar>

        <!-- <sidebar v-if="$myauth.isAuthenticated && $myauth.user_type === 'admin'" /> -->

        <!-- <vs-sidebar
        class="sidebarx"
        absolute
        hover-expand
        reduce
        v-model="active"
        :open.sync="activeSidebar"
        >
        <template #logo>
          <img src="../../assets/logo.png" height="40px" width="40px" />
        </template>
        <vs-sidebar-item id="home">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="Filier">
        <template #icon>
          <i class='bx bx-grid-alt'></i>
        </template>
        Filier
      </vs-sidebar-item>
      <vs-sidebar-item id="Filier">
        <template #icon>
          <i class='bx bxs-graduation'></i>
        </template>
        Filier
      </vs-sidebar-item>
      <vs-sidebar-item id="Prof">
        <template #icon>
          <i class='bx bx-group'></i>
        </template>
        Profs
      </vs-sidebar-item>
      <vs-sidebar-item id="Prof">
        <template #icon>
          <i class='bx bx-id-card'></i>
        </template>
        Profs
      </vs-sidebar-item>
      <vs-sidebar-item id="CrudEmploi">
        <template #icon>
          <i class='bx bx-calendar-plus'></i>
        </template>
        CrudEmploi
      </vs-sidebar-item>
      </vs-sidebar> -->
    
    </div>
</template>
<script>
// import Sidebar from '../Sidebar.vue'

export default {
    components :{
        // Sidebar
    },
    data:() => ({
    //     Sidebar active: 'home',
    //   activeSidebar: false
    }),
     methods : {
        logout() {
            this.$myauth.isAuthenticated = false
            this.$router.push({name: 'Home'})
        }
    }   
  }
</script>

  