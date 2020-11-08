<template>
  <!-- <div> -->
    <!-- <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button> -->

    <!-- <div class="mt-3">
      Submitted Labels:
      <div v-if="submittedLabels.length === 0">--</div>
      <ul v-else class="mb-0 pl-3">
        <li v-for="label in submittedLabels" :key="label">{{ label }}</li>
        <li v-for="title in submittedTitles" :key="title">     {{ title }}</li>
      </ul>
    </div> -->

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Label"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          :state="labelState"
          label="Label"
          label-for="label-input"
          invalid-feedback="Label is required"
        >
          <b-form-input
            id="label-input"
            v-model="label"
            :state="labelState"
            ref="label"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          :state="titleState"
          label="Title: "
          label-for="Title-input"
          invalid-feedback="Title is required"
        >
          <b-form-input
            id="title-input"
            v-model="title"
            ref="title"
            :state="titleState"
            required
          ></b-form-input>
        </b-form-group>

        <div v-show="Error">
          {{errorMessage}}
        </div>

      </form>
    </b-modal>
  <!-- </div> -->
</template>

<script>
import axios from 'axios'
// import EventBus from '../../main';

  export default {
    data() {
      return {
        label: '',
        labelState: null,
        title: '',
        titleState : null,
        filierId : null,
        errorMessage : null,
        filier : {},
        Error : false,
        loading: true,
        errored: false
      }
    },
    methods: {
      async addfilier(){
      try{
        const res = await axios.post("http://localhost:8000/filiers", this.filier)
        return res
      }catch(err){
        return err.response
      }
          
          // .then(response => { 
          //   //this.filierId = response.data.id
          //   // this.errored = false
          //   return response
          //   })
          // .catch(error => {
          //   // this.errorMessage = error.message;
          //   // this.errored = true
          //   // this.Error = true
          //   // this.resetModal()
          //   //console.error("There was an error!", error);
          //   return error.response
          // })
          // // .finally(() => { 
          // //   return this.errored
          // // })
      },
      
      show(){
          this.$refs.modal.show()
      },
      checkFormValidity() {
        const validLabel = this.$refs.label.checkValidity()
        const validTitle = this.$refs.title.checkValidity()
        this.labelState = validLabel
        this.titleState = validTitle
        const valid = validLabel && validTitle
        return valid
      },
      
      resetModal() {
        this.label = ''
        this.title = ''
        this.filier = {}
        this.labelState = null
        this.titleState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      async handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the label to submitted labels
        this.filier.label = this.label
        this.filier.title = this.title
        
        //this.checkRequestError()
        this.Error = false
        const res = await this.addfilier()
        if(res.status !== 200){
          this.Error = true
          this.errorMessage = res.data.detail
          return 
        }
        // Hide the modal 
         this.$nextTick(() => {
                        this.$bvModal.hide('modal-prevent-closing')
                      })
        // EventBus.$on('i-got-clicked', data => {
        //       console.log(data)
        // })
        this.$emit('add-filier',res.data)
      }
    },
    // created:{
    //   test(){
    //       this.$parent.TestMethode()
    //       console.log("created methode")
    //   }
    //}
    // computed : {
    //   checkRequestError(){
    //       if(!this.errorMessage)
    //         this.Error = false
    //       else{
    //         this.Error = true
    //       }
    //   },
    // }
    
  }
</script>