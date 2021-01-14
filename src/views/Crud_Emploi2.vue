<template>
<div>
  <sidebar id="s"/>
<b-row align-h="center">
    
      
  <b-col  cols="1"></b-col>  
  <b-col cols="8" ><div>
  <div class="mt-3"   v-for="j in 6" :key="j">
    <b-card-group deck  >
      <b-card id="cartaa" bg-variant="primary" align="center" text-variant="white" :title=Days[j-1]>
      </b-card>

       <b-card bg-variant="primary" text-variant="white" header="8h30 à 10h30" class="text-center">
        <b-card-text  v-if="i != 3" v-on:click="selectedTimeslot(j,i)"> {{module.title}} <br>
                        {{module.nbr}} <br>
                        {{module.prof}} <br>
                        {{module.salle}}</b-card-text>
      </b-card>
   <b-card bg-variant="primary" text-variant="white" header="10h30 à 12h30" class="text-center">
        <b-card-text  v-if="i != 3" v-on:click="selectedTimeslot(j,i)"> {{module.title}} <br>
                        {{module.nbr}} <br>
                        {{module.prof}} <br>
                        {{module.salle}}</b-card-text>
    </b-card>
   <b-card bg-variant="primary" text-variant="white" header="14h à 16h" class="text-center">
<b-card-text  v-if="i != 3" v-on:click="selectedTimeslot(j,i)"> {{module.title}} <br>
                        {{module.nbr}} <br>
                        {{module.prof}} <br>
                        {{module.salle}}</b-card-text>      </b-card>
   <b-card bg-variant="primary" text-variant="white" header="16h à 18h" class="text-center">
<b-card-text  v-if="i != 3" v-on:click="selectedTimeslot(j,i)"> {{module.title}} <br>
                        {{module.nbr}} <br>
                        {{module.prof}} <br>
                        {{module.salle}}</b-card-text>      </b-card>
 
    </b-card-group>
  </div>
</div>
            
                                                    
    </b-col >
    <b-col > 
        <div id="selection" >
        <b-dropdown :text="Text" variant="primary" class="m-2" menu-class="w-100">
        <div v-for="filier in this.info.data" :key="filier.id">
            <b-dropdown-item v-on:click="selectedFilier(filier)">
                {{filier.title}}
            </b-dropdown-item>
        </div>
        </b-dropdown>
        <b-dropdown :text="Text" variant="primary" class="m-2" menu-class="w-100">
        <div v-for="filier in this.info.data" :key="filier.id">
            <b-dropdown-item v-on:click="selectedFilier(filier)">
                {{filier.title}}
            </b-dropdown-item>
        </div>
        </b-dropdown>
        </div>
    </b-col>

    </b-row>
</div>
</template>

<script>
import axios from 'axios'
import Sidebar from '../components/Sidebar.vue'

export default {
     components : {
          Sidebar
    },
    data(){
        return{
            info : "",
            filier_id : null,
            filier_label : null,
            filier_title : null,
            Days : ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
            cellStatus : true,
            module : {
                title : "Programmation Orientée Objet Java",
                nbr : "48",
                prof : "M. NAJI",
                salle : "75"
            }
        }
    },
    methods : {
        async fetchData(){
            axios
            .get("http://localhost:8000/filiers")
            .then(response => (this.info = response))
        },
        selectedFilier(filier){
            this.filier_id = filier.id
            this.filier_label = filier.label
            this.filier_title = filier.title
        },
        classCell(ind){
            if(ind != 3)
                return "Cell"
            return "EmptyCell"
        },
        selectedTimeslot(row,cell){
            console.log("row : ",row," cell: ",cell)
        }
    },
    mounted() {
        this.fetchData()
    // this.$root.$on('bv::dropdown::show', bvEvent => {
    //   console.log('Dropdown is about to be shown', bvEvent)
    // })
    },
    computed : {
        Text(){
            if(this.filier_id)
                return this.filier_label
            return "Select Filier"
        },
        
    }
}
</script>

<style>
.drop{
    text-align: center;
    width: auto;
}
.Title
{
    display: table-caption;
    text-align: center;
    font-weight: bold;
    font-size: larger;
}
#selection
{display: flex;
margin-left:60px;
margin-top:250px;
position:fixed;
flex-direction:column;
}
@media screen and (max-width: 800px) {
 #selection
{
margin-left:0px;
width:50px;
height:100px;
}}
</style>
