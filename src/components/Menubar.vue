<template>
    <b-list-group class="Menubar" >
      <b-list-group-item v-for="item in items.items" :key="item.id" class="d-flex justify-content-between align-items-center">
        <router-link v-bind:to="item.href"  id="item">
          <i v-bind:class=item.icon></i><span class="d-none d-sm-none d-md-block ">{{ item.message }}</span></router-link>
      </b-list-group-item>
    </b-list-group>
</template>

<script>
// import linksStore from "@/store/linksStore";
export default {
  name: "Menubar",
  data() {
    return {
     items: [
      { message: "Accueil", href: "/" ,icon:"fa fa-user"},
      { message: "CRUD profs", href: "/about",icon:"fa fa-user" },
      { message: "CRUD classes", href: "#hala3",icon:"fa fa-user" },
      { message: "CRUD étudiants", href: "#hala4",icon:"fa fa-user" },
      { message: "CRUD vacances", href: "#hala5",icon:"fa fa-user" },
      { message: "Calendrier", href: "/emploi",icon:"fa fa-user" }
    ]
    };
  }
};
</script>
<style>
.Menubar
{
  position:fixed;
 }
#item
{ display: flex;
}
#item span
{
  margin-left:20px;
}
</style>