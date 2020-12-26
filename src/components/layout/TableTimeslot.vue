<template>
<div>
  <div class="row">
            <div class="Table">
            <div class="Title">
                    <div>{{filier_title}}</div><br>
            </div>
            <div class="Heading">
                <div class="EmptyCell col-xs">
                    <div class="box"></div>
                </div>
                <div class="CellDays col-xs">
                    <div class="box">8h30 à 10h30</div>
                </div>
                <div class="CellDays col-xs">
                    <div class="box">10h30 à 12h30</div>
                </div>
                <div class="EmptyCell col-xs">
                    <div class="box"></div>
                </div>
                <div class="CellDays col-xs">
                    <div class="box">14h à 16h</div>
                </div>
                <div class="CellDays col-xs">
                    <div class="box">16h à 18h </div>
                </div>
            </div>

            <div class="Row" v-for="j in 6" :key="j">
                <div class="CellDays col-xs">
                    <div class="box">{{Days[j-1]}}</div>
                </div>
                <div class="col-xs" :class="classCell(i)" v-for="i in 5" :key="i">
                    <div class="box" v-if="i != 3" v-on:click="selectedTimeslot(j,i)">
                        {{module.title}} <br>
                        {{module.nbr}} <br>
                        {{module.prof}} <br>
                        {{module.salle}}
                        <!-- {{emploi[0].title}} -->
                    </div>
                    <div class="box" v-else>
                    </div>
                </div>
            </div>
        </div>        
        </div>
        <AddTimeslot ref="addtimeslot"/>
        <h1>{{emploi}}</h1>
</div>
</template>

<script>
import AddTimeslot from './AddTimeslot.vue'
export default {
    components : {
        AddTimeslot
    },
    data(){
        return{
            // filier_list : "",
            // filier_id : 1,
            // filier_label : null,
            filier_title : null,
            Days : ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
            // cellStatus : true,
            module : {
                title : "",
                nbr : "",
                prof : "",
                salle : ""
            },
            emploi : []

        }
    },
    methods : {
        classCell(ind){
            if(ind != 3)
                return "Cell"
            return "EmptyCell"
        },
        selectedTimeslot(row,cell){
            this.$refs.addtimeslot.showAddTimeslot();
            console.log("row : ",row," cell: ",cell)
            console.log(this.emploi[0].title)
        },
        testFct(data){
            this.emploi = data
        }
        // show(data){
        //     // this.emploi = data
        //     // console.log(this.emploi.PromiseResult)
        // }
    }
}
</script>

<style>

</style>