<template>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Ajouter un Devoir"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        

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

        <b-form-group
          :state="descrState"
          label="Descr"
          label-for="descr-input"
          invalid-feedback="Description is required"
        >
          <b-form-input
            id="descr-input"
            v-model="descr"
            :state="descrState"
            ref="descr"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group 
          :state="filierState" label="Filier" label-for="filierinput" invalid-feedback="Filier is required"
        >
          <b-form-input 
              id="filierinput" v-model="FilierId" :state="filierState" ref="filier" list="filierlist" required>
          </b-form-input>
          <b-form-datalist id="filierlist" :options="filierList.text"></b-form-datalist>
          <!-- <datalist id="filier-list">
              <option v-for="variant in filierList" :key="variant">{{ variant }}</option>
          </datalist> -->
        </b-form-group>

        <b-form-group
          :state="descrState"
          label="Date limite"
          label-for="date-input"
          invalid-feedback="Date is required"
        >
        <b-form-input 
            id="date-input" 
            type="date"
            v-model="date"
            :state="dateState"
            ref="date"
            required
            ></b-form-input><br>
        <b-form-input 
            id="endtime-input" 
            type="time"
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
        descr: '',
        descrState: null,
        title: '',
        titleState : null,
        date : '',
        dateState : null,
        filierName : '',
        filierId : null,
        filierState : null,
        filierList: [],
        errorMessage : null,
        devoir : {},
        error : false,
        endtime : ""
      }
    },
    methods: {
      async fetchDatafilier(){
            const total  = await axios.get("http://localhost:8000/filiers/filier/count",this.$myauth.getBearer())
            const filiers = await axios.get("http://localhost:8000/filiers?limit="+total.data,this.$myauth.getBearer())
            if(filiers.status === 200){
              filiers.data.forEach(filier => {
                this.filierList.push({text : filier.title, value : filier.id})
              })
            }
      },
      async adddevoir(){
      try{
        const res = await axios.post("http://localhost:8000/devoirs", this.devoir,this.$myauth.getBearer())
        return res
      }catch(err){
        return err.response
      }
      },
      
      show(){
          this.$refs.modal.show()
      },
      updateTotal(){
        this.$root.$emit('getTotalEntries')
      },
       updateData(){
        this.$root.$emit('fetchData')
      },
      checkFormValidity() {
        const validDescr = this.$refs.descr.checkValidity()
        const validTitle = this.$refs.title.checkValidity()
        this.descrState = validDescr
        this.titleState = validTitle
        const valid = validDescr && validTitle
        return valid
      },    
      resetModal() {
        this.descr = ''
        this.title = ''
        this.devoir = {}
        this.descrState = null
        this.titleState = null
        this.errorMessage = null
        this.error = false
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
        this.devoir.descr = this.descr
        this.devoir.title = this.title
        //this.checkRequestError()
        this.error = false
        // const res = await this.adddevoir()
        // if(res.status !== 200){
        //   this.error = true
        //   this.errorMessage = res.data.detail
        //   return 
        // }
        // Hide the modal 
         this.$nextTick(() => {
                        this.$bvModal.hide('modal-prevent-closing')
                      })
        //call getTotal methode from parent componet to update total
        // this.updateTotal()
        // this.updateData()
      }
    },
    mounted() {
      this.fetchDatafilier()
    },
    computed: {
      FilierId: {
        get(){
              return this.filierName
        },
        set(FilierId){
              this.filierName = FilierId
              Object.values(this.filierList).forEach(val => {
                if(val.text == FilierId)
                  this.filierId = val.value
              });
        }
      }
    }
}
    
</script>