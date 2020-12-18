<template>
  <div class="hidden">
    <vs-sidebar absolute hover-expand reduce v-model="active" open class="sidebarx">
      <template #logo>
        <!-- ...img logo -->
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        <router-link to="/admin" v-if="this.$myauth.user_type=='admin'">
        Home
        </router-link>
        <router-link to="/prof_panel" v-else-if="this.$myauth.user_type=='prof'">
        Home
        </router-link>
      </vs-sidebar-item>
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
        Filier
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
        Departement
        </router-link>
      </vs-sidebar-item>

      <vs-sidebar-item id="CrudEmploi" v-if="this.$myauth.user_type=='admin'">
        <template #icon>
          <i class='bx bx-calendar-plus'></i>
        </template>
        <router-link to="/create_emploi">
        CrudEmploi
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
      <!-- <template #footer>
          <vs-row justify="space-between">
            <vs-avatar badge-color="danger" badge-position="top-right">
              <i class='bx bx-bell' ></i>

              <template #badge>
                28
              </template>
            </vs-avatar>

            <vs-avatar>
              <img src="/avatars/avatar-5.png" alt="">
            </vs-avatar>
          </vs-row>
        </template> -->
    </vs-sidebar>
  </div>
</template>
<script>

export default {
    data:() => ({
      active: 'home',
    })
  }
</script>
<style scoped>
    .sidebarx{
          position: fixed;
          margin-top: 44px;
    }
  </style>