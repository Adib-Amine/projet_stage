<template>
  <div class="hidden">
    <vs-sidebar absolute hover-expand reduce v-model="active" open class="sidebarx">
      <template #logo>
        <!-- ...img logo -->
      </template>
      <!-- <vs-sidebar-item id="home">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        <router-link to="/admin" v-if="this.$myauth.user_type=='admin'">
        Home
        </router-link>
        <router-link to="/prof_panel" v-else-if="this.$myauth.user_type=='prof'">
        Home
        </router-link>
      </vs-sidebar-item> -->


      
      <!-- <vs-sidebar-item id="Filier">
        <template #icon>
          <i class='bx bx-grid-alt'></i>
        </template>
        Filier
      </vs-sidebar-item> -->
      <vs-sidebar-item id="Filier" v-if="this.$myauth.user_type=='admin'">
        <template #icon>
          <i class='bx bxs-graduation'></i>
        </template>
        <router-link to="/filier">
        Filières
        </router-link>
      </vs-sidebar-item>

      <vs-sidebar-item id="Prof" v-if="this.$myauth.user_type=='admin'">
        <template #icon>
          <i class='bx bx-id-card'></i>
        </template>
        <router-link to="/profs">
        Profs
        </router-link>
      </vs-sidebar-item>

      <vs-sidebar-item id="Departement" v-if="this.$myauth.user_type=='admin'">
        <template #icon>
          <i class='bx bxs-building-house'></i>
        </template>
        <router-link to="/departement">
        Departements
        </router-link>
      </vs-sidebar-item>

      <vs-sidebar-item id="CrudEmploi" v-if="this.$myauth.user_type=='admin'">
        <template #icon>
          <i class='bx bx-calendar-plus'></i>
        </template>
        <router-link to="/create_emploi">
        Créer Emploi
        </router-link>
      </vs-sidebar-item>

      <vs-sidebar-item id="ProfNotifications" v-if="this.$myauth.user_type=='prof'">
        <template #icon>
          <!-- <i class='bx bx-book-open'></i> -->
          <i class='bx bx-calendar'></i>
        </template>
        <router-link to="/prof_emploi">
        Emploi
        </router-link>
      </vs-sidebar-item>

      <vs-sidebar-item id="Devoir" v-if="this.$myauth.user_type=='prof'">
        <template #icon>
          <!-- <i class='bx bx-book-open'></i> -->
          <i class='bx bx-book-content'></i>
        </template>
        <router-link to="/devoirs">
        Devoir
        </router-link>
      </vs-sidebar-item>

      <vs-sidebar-item id="UpdateProfile" v-if="this.$myauth.user_type=='prof'">
        <template #icon>
          <i class='bx bx-id-card'></i>
        </template>
        <router-link to="/update_profile">
        Update Profile
        </router-link>
      </vs-sidebar-item>
      <!-- <vs-sidebar-item id="chat">
        <template #icon>
          <i class='bx bx-chat'></i>
        </template>
        Chat
      </vs-sidebar-item> -->
      <template #footer v-if="this.$myauth.user_type=='prof'">
          <vs-row justify="space-between" class="footbill">
            <router-link to="/prof_notif">
            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class='bx bxs-bell' ></i>

              <template #badge>
                {{total}}
              </template>
            </vs-avatar>
            </router-link>
          </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data:() => ({
      active: 'home',
      total : 0
    }),
    methods : {
      getTotalEntries(){
            axios
            .get("http://localhost:8000/notifs/prof/count/"+this.$myauth.user_id)
            .then(response => (this.total = response.data))
        },
    },
    mounted(){
      this.getTotalEntries()
    }
  }
</script>
<style scoped>
    .sidebarx{
          margin-top: 44px;
    }
    .footbill{
      margin-bottom:50px;
    }
  </style>