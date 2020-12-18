<template>
    <div class="container ">
      <br>
      <vs-row >
        <vs-col offset="0" w="4">
        <div class="bg-light margpad">  
          <vs-row  justify="space-around">
            <vs-col w="6">
            <vs-card  type="2">
            <template #img>
            <img src="https://vuesax.com/foto6.png" alt="">
            </template>
            <template #text>
            <p>
              Update Image
            </p>
            </template>
            </vs-card>
            </vs-col>
          </vs-row>
          
          <vs-row class="mh" align="center" justify="space-around" direction="column">
            <vs-col w="6">
              <br>
              <h3>{{this.info.data.lastName + ' ' +  this.info.data.firstName}}</h3>
            </vs-col>
            <vs-col w="9">
              <h6> Département mathématiques </h6>
              <h6>et informatique</h6>
            </vs-col>
          </vs-row>

        </div>
        </vs-col>


        <vs-col w="7">

          <vs-row>
            <vs-col offset="1">
                <div class="bg-light"> 
                <div class="margpad">
                <h6>Main Information</h6>
                <a v-on:click="showModelUpdate()" class="settings" ><i class="material-icons">&#xE8B8;</i></a>
                <hr>
                <template>
                  <vs-row class="mh" justify="space-between" direction="column">
                    <div>
                      <h5>First Name: </h5>
                      <h6 class="text-primary"> {{this.info.data.firstName}} </h6>
                    </div>
                    <!-- <vs-col  w="4">
            <vs-input primary v-model="info.data.firstName" state="dark" />
          </vs-col> -->
                    <br>
                    <div>
                      <h5>Last Name: </h5>
                      <h6 class="text-primary"> {{this.info.data.lastName}} </h6>
                    </div>
                    <!-- <vs-col  w="4">
            <vs-input primary v-model="info.data.lastName" state="primary" />
          </vs-col> -->
                    <br>
                    <div>
                      <h5>UserName: </h5>
                      <h6 class="text-primary"> {{this.info.data.username}} </h6>
                    </div>
                    <!-- <vs-col  w="4">
            <vs-input primary v-model="info.data.username" state="dark" />
          </vs-col> -->
                  </vs-row>
                </template>
                </div>
                </div>
            </vs-col>
          </vs-row>
          <vs-row>
            <vs-col offset="1">
                <div class="bg-light"> 
          <div class="margpad">
          <h6>Secondary Information</h6>
          <hr>
         
          </div>
                </div>
            </vs-col>
          </vs-row>

        </vs-col>
      </vs-row>
      <UpdateProf ref="updateProfModel"/>
    </div>
</template>
<script>
import axios from 'axios'
import UpdateProf from '../components/layout/UpdateProf.vue'


export default {
    components :  {
      UpdateProf
    },
    data(){
      return {
        info : "",
        value :''
      }
    },
    methods:{
       async fetchDataProf(){
            axios
            .get("http://localhost:8000/profs/user/me",this.$myauth.getBearer())
            .then(response => (this.info = response))
        },
        async showModelUpdate(){
            // const res = await this.fetchDataProf()
            this.$refs.updateProfModel.show(this.info.data)
        },
    },
    mounted(){
      this.fetchDataProf()
      this.$root.$on("fetchDataProf",() => {
        return this.fetchDataProf()
    })
    }
}
</script>

<style>
 .margpad{
   margin-left: 20px;
   margin-bottom: 20px;
   padding: 20px;
  }
  h5,h6{
    display: inline;
  }
  h6{
    font-size: 1.3em;
  }

</style>
