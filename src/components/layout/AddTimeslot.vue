<template>
  <b-modal
      id="modal-prevent-closing"
      ref="modal"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group :state="titleState" label="Matiere*" label-for="matiere-input"
          invalid-feedback="Matiere is required">
          <b-form-input id="matiere-input" v-model="title" :state="titleState" ref="title" required>
          </b-form-input>
        </b-form-group>

        <b-form-group label="Description" label-for="descr-input">
          <b-form-input id="descr-input" v-model="descr" ref="descr">
          </b-form-input>
        </b-form-group>
        

        <b-form-group 
          :state="profState" label="Prof*" label-for="profinput" invalid-feedback="Prof is required"
        >
          <b-form-input 
              id="profinput" v-model="profId" :state="profState" ref="prof" list="proflist" required>
          </b-form-input>
          <b-form-datalist id="proflist" :options="profList"></b-form-datalist>
          <!-- <datalist id="prof-list">
              <option v-for="variant in profList" :key="variant">{{ variant }}</option>
          </datalist> -->
        </b-form-group>
        
        <b-form-group label="Salle" label-for="salle-input">
          <b-form-input id="salle-input" v-model="salle" ref="salle">
          </b-form-input>
        </b-form-group>

        



        <!-- <div v-show="error">
          {{errorMessage}}
        </div> -->

      </form>
    </b-modal>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        title: '',
        titleState: null,
        profId : null,
        profState : null,
        profList: [],
        descr : '',
        startRecur : '2020-11-16',
        endRecur : '2021-01-16',
        salle : null,
        info : null,
        errorMessage : null,
        error : false,
        testtimeslots: {
          title : "string",
          descr : "string",
          numberHour : 0,
          startTime : "08:30:00",
          endTime : "10:30:00",
          daysOfWeek : 0,
          startRecur : "2020-12-22",
          endRecur : "2020-12-22",
          textColor : "string",
          color : "string",
          groupId : 0,
          profId : 4,
          filierId : 3
        }

      }
    },
    methods: {
      async fetchDataProf(){
            const total  = await axios.get("http://localhost:8000/profs/prof/count",this.$myauth.getBearer())
            const profs = await axios.get("http://localhost:8000/profs?limit="+total.data,this.$myauth.getBearer())
            if(profs.status === 200){
              profs.data.forEach(prof => {
                this.profList.push(prof.username)
              })
            }
      },
      async addtimeslot(){
      try{
        // const res = await axios.post("http://localhost:8000/timeslots", this.timeslot,this.$myauth.getBearer())
        const res = await axios.post("http://localhost:8000/timeslots", this.testtimeslots,this.$myauth.getBearer())
        return res
      }catch(err){
        return err.response
      }
      },
      showAddTimeslot(){
          this.$refs.modal.show()
      },
      checkFormValidity() {
        const validTitle = this.$refs.title.checkValidity()
        const validProf = this.$refs.prof.checkValidity()
        this.titleState = validTitle
        this.profState = validProf
        const valid = validTitle && validProf
        return valid
      },
      resetModal() {
        this.title = ''
        this.titleState = null
        this.profId = null
        this.profState = null
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

        const res = await this.addtimeslot()
        if(res.status !== 200){
          this.error = true
          this.errorMessage = res.data.detail
          return 
        }

        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    },
    mounted() {
      this.fetchDataProf()
    },
    
    
  }
</script>