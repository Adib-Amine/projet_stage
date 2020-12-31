<template>
  <!-- @show="resetModal" -->
  <b-modal
      id="modal-prevent-closing"
      ref="modal"
      
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
              id="profinput" v-model="ProfId" :state="profState" ref="prof" list="proflist" required>
          </b-form-input>
          <b-form-datalist id="proflist" :options="profList.text"></b-form-datalist>
          <!-- <datalist id="prof-list">
              <option v-for="variant in profList" :key="variant">{{ variant }}</option>
          </datalist> -->
        </b-form-group>
        
        <b-form-group :state="numberHourState" label="Numbre of Hour" label-for="nbr-input"
          invalid-feedback="Numbre of Hour is required">
          <b-form-input id="nbr-input" type="number" v-model="numberHour" :state="numberHourState" ref="numberHour" required>
          </b-form-input>
        </b-form-group>


        <b-form-group label="Text Color" label-for="textColor-input">
          <b-form-input id="textColor-input" type="color" v-model="textColor" ref="textColor">
          </b-form-input>
        </b-form-group>

        <b-form-group label="Background Color" label-for="color-input">
          <b-form-input id="color-input" type="color" v-model="color" ref="color">
          </b-form-input>
        </b-form-group>

        
        <div v-show="error">
          {{errorMessage}}
        </div>
        
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
        profName : '',
        profId : null,
        profState : null,
        numberHour : null,
        numberHourState : null,
        textColor: '#f7f7f7',
        color : '#0275d8' ,
        profList: [],
        descr : '',
        startTime : null,
        endTime : null,
        startRecur : null,
        endRecur : null,
        daysOfWeek : "",
        filierId : null,
        info : null,
        errorMessage : null,
        error : false,
        timeslot : {},

      }
    },
    methods: {
      async fetchDataProf(){
            const total  = await axios.get("http://localhost:8000/profs/prof/count",this.$myauth.getBearer())
            const profs = await axios.get("http://localhost:8000/profs?limit="+total.data,this.$myauth.getBearer())
            if(profs.status === 200){
              profs.data.forEach(prof => {
                this.profList.push({text : prof.username, value : prof.id})
              })
            }
      },
      async addtimeslot(){
      try{
        const res = await axios.post("http://localhost:8000/timeslots", this.timeslot,this.$myauth.getBearer())
        // const res = await axios.post("http://localhost:8000/timeslots", this.testtimeslots,this.$myauth.getBearer())
        return res
      }catch(err){
        return err.response
      }
      },
      showAddTimeslot(dayOfWeek,startTime,endTime,filierId,startRecur,endRecur){
        this.daysOfWeek  = dayOfWeek
        this.startTime = startTime
        this.endTime = endTime
        this.filierId = filierId
        this.startRecur = startRecur
        this.endRecur  =endRecur
        this.$refs.modal.show()
      },
      updateData(){
        this.$root.$emit('fetchEmploiAdmin')
      },
      checkFormValidity() {
        const validTitle = this.$refs.title.checkValidity()
        const validProf = this.$refs.prof.checkValidity()
        const validNbrHour = this.$refs.numberHour.checkValidity()
        this.titleState = validTitle
        this.profState = validProf
        this.numberHourState = validNbrHour
        const valid = validTitle && validProf && validNbrHour
        return valid
      },
      resetModal() {
        this.title = ''
        this.titleState = null
        this.descr = ''
        this.profId = null
        this.profName = ''
        this.filierId = null
        this.profState = null
        this.numberHour = 0
        this.numberHourState = null
        this.daysOfWeek = ""
        this.startTime = ""
        this.endTime = ""
        this.startRecur = ""
        this.endRecur = ""
        this.errorMessage = ""
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
        //add
        this.timeslot.title = this.title
        this.timeslot.descr = this.descr
        this.timeslot.numberHour = this.numberHour
        this.timeslot.startTime = this.startTime
        this.timeslot.endTime = this.endTime
        this.timeslot.daysOfWeek = this.daysOfWeek
        this.timeslot.startRecur = this.startRecur
        this.timeslot.endRecur = this.endRecur
        this.timeslot.textColor = this.textColor
        this.timeslot.color = this.color
        this.timeslot.profId = this.profId
        this.timeslot.filierId = this.filierId
        // testtimeslots: {
        //   title : "string",
        //   descr : "string",
        //   numberHour : 0,
        //   startTime : "08:30:00",
        //   endTime : "10:30:00",
        //   daysOfWeek : 0,
        //   startRecur : "2020-12-22",
        //   endRecur : "2020-12-22",
        //   textColor : "string",
        //   color : "string",
        //   profId : 4,
        //   filierId : 3
        // },
        const res = await this.addtimeslot()
        if(res.status !== 200){
          this.error = true
          this.errorMessage = res.data.detail
          return 
        }
        this.updateData()

        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    },
    mounted() {
      this.fetchDataProf()
    },
    computed: {
      ProfId: {
          get(){
              return this.profName
          },
          set(ProfId){
              this.profName = ProfId
              Object.values(this.profList).forEach(val => {
                if(val.text == ProfId)
                  this.profId = val.value
              });
          }
      }
    }
    
    
  }
</script>