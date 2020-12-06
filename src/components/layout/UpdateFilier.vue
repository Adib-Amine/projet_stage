<template>
    <b-modal
      id="modal-prevent-closing"
      ref="modalUpdate"
      :title="`Update Your Label ${filierId}`" 
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk">
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
            v-on:change="detectchange"
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
            v-on:change="detectchange"
            required
          ></b-form-input>
        </b-form-group>

        <div v-show="error">
          {{errorMessage}}
        </div>
      </form>
    </b-modal>
  <!-- </div> -->
</template>

<script>
import axios from 'axios'
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
        error : false,
        modelChange : false
      }
    },
    methods: {
      show(reqfilier){
          this.$refs.modalUpdate.show()
          this.label = reqfilier.label
          this.title = reqfilier.title
          this.filierId = reqfilier.id 
      },
      async updateFilier(id){
        try{
        const res = await axios.post("http://localhost:8000/filiers/"+id, this.filier,this.$myauth.getBearer())
          return res
        }catch(err){
          return err.response
        }
      },
      updateData(){
        this.$root.$emit('fetchData')
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
        this.modelChange = false
        this.errorMessage = null
        this.error = false
      },
      detectchange(){
        this.modelChange = true
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
        if(this.modelChange){
          this.filier.label = this.label
          this.filier.title = this.title
          //this.checkRequestError()
          this.error = false
          const res = await this.updateFilier(this.filierId)
          if(res.status !== 200){
            this.error = true
            this.errorMessage = res.data.detail
            return 
          }
        }
        // Hide the modal 
         this.$nextTick(() => {
                        this.$bvModal.hide('modal-prevent-closing')
                      })
        //Send data to Crud_Filier
        //this.$emit('add-filier',res.data)
        this.updateData()
      }
    },
  }
</script>