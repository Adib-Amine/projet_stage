<template>
  <div class="container">
    <!-- <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet"> -->
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> -->

    <br>

    <vs-row>
      <vs-col offset="0" w="4">
        <div class="shadow p-3 mb-5 bg-white rounded">
          <vs-row justify="space-around">
            <vs-col w="6">
              <vs-card type="2">
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
              <h3 align="center">{{this.info.data.lastName + ' ' +  this.info.data.firstName}}</h3>
            </vs-col>
            <vs-col w="9" align="center">
              <h6>Département mathématiques </h6>
              <h6>et informatique</h6>
            </vs-col>
          </vs-row>

        </div>
      </vs-col>


      <vs-col w="7">

        <vs-row>
          <vs-col offset="1">
            <div>
              <div class="margpad shadow p-3 mb-5 bg-white rounded">
                <vs-row class="mh" align="center" justify="space-between" direction="row">

                  <h4> Main Information</h4>
                  <a v-on:click="showModelUpdate()" class="settings"><i style="font-size=20px;animation-duration:4s;"
                      class="fa fa-cog fa-xs fa-spin"></i></a>
                </vs-row>

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
              <div class="margpad shadow p-3 mb-5 bg-white rounded">
                <h4>Secondary Information</h4>
                <hr>

              </div>
            </div>
          </vs-col>
        </vs-row>

      </vs-col>
    </vs-row>
    <UpdateProf ref="updateProfModel" />
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

  h5,h6{
    display: inline;
  }

@media screen and (max-width: 800px) {
h4,h6,h5
{
    font-size:2.5vw;}
h3
{
    font-size:3vw;}
    
}
.mh i
{
 font-size:2.5vw;
}

</style>
