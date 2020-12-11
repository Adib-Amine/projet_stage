<template>
      <b-row>
    <b-col md="auto"></b-col>
     <b-col>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
    
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2" >
        <b-form-input
          id="input-2"
          :v-model="name"
          required
          v-on:change="detectchange"
          :value="this.prof.data.username"
          :readonly="check"
        ></b-form-input>
          <b-button variant="primary"  v-on:click="check=false">Modifier</b-button>
      </b-form-group>
      
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
   
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        check:true,
        show: true,
        total: 0,
        id:'',
        
        modelChange : false,
        name: '',
        nameState: null,
        prenom: '',
        prenomState : null,
        username: '',
        usernameState : null,
        password: '',
        passwordState : null,
        profId : null,
        errorMessage : null,
        prof : {},
        error : false,


      }
    },
    methods: {
    async fetchData(){
            axios
            .get("http://localhost:8000/profs/user/me",this.$myauth.getBearer())
            .then(response => (
                                this.prof = response,
                                console.log(response)
                              ))
            
        },
    detectchange(){

    },
    onSubmit(evt) {
        evt.preventDefault()
         
       // alert(JSON.stringify(this.form))
      },
    onReset(evt) {
       evt.preventDefault()
        // Reset our form values
       // this.form.email = ''
        //this.form.name = ''
        //this.form.food = null
        //this.form.checked = []
        // Trick to reset/clear native browser form validation state
        //this.show = false
        //this.$nextTick(() => {
          //this.show = true
       // })
    }
        },
    mounted () {
    this.fetchData()

              },
  }
</script>