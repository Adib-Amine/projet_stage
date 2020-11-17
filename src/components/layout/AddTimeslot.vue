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
          :state="profState" label="Prof*" label-for="prof-input" invalid-feedback="Prof is required"
        >
          <b-form-input 
              id="prof-input" v-model="profId" :state="profState" ref="prof" list="prof-list" required>
          </b-form-input>
          <datalist id="prof-list">
              <option>Manual Option</option>
              <option v-for="variant in profList" :key="variant">{{ variant }}</option>
          </datalist>
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

      }
    },
    methods: {
      async fetchDataProf(){
            const total  = await axios.get("http://localhost:8000/profs/prof/count")
            const profs = await axios.get("http://localhost:8000/profs?limit="+total.data)
            if(profs.status === 200){
              profs.data.forEach(prof => {
                this.profList.push(prof.username)
              })
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
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
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