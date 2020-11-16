<template>
    <div class="container bg-white text-dark">
        <b-dropdown :text="Text" block variant="primary" class="m-2" menu-class="w-100">
        <div v-for="filier in this.info.data" :key="filier.id">
            <b-dropdown-item v-on:click="selectedFilier(filier)">
                {{filier.title}}
            </b-dropdown-item>
        </div>
        </b-dropdown>
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
                    <div class="col-xs" :class="classCell(i)" v-for="i in 5" :key="i" >
                    <div class="box" v-if="i != 3" v-on:click="selectedTimeslot(j,i)">
                        {{module.title}} <br>
                        {{module.nbr}} <br>
                        {{module.prof}} <br>
                        {{module.salle}}
                    </div>
                    <div class="box" v-else>
                    </div>
                    </div>
            </div>

        </div>
        
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            info : "",
            filier_id : null,
            filier_label : null,
            filier_title : null,
            Days : ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
            cellStatus : true,
            module : {
                title : "ogrammation Orientée Objet Java",
                nbr : "48",
                prof : "M. NAJI",
                salle : "75"
            }
        }
    },
    methods : {
        async fetchData(){
            axios
            .get("http://localhost:8000/filiers")
            .then(response => (this.info = response))
        },
        selectedFilier(filier){
            this.filier_id = filier.id
            this.filier_label = filier.label
            this.filier_title = filier.title
        },
        classCell(ind){
            if(ind != 3)
                return "Cell"
            return "EmptyCell"
        },
        selectedTimeslot(row,cell){
            console.log("row : ",row," cell: ",cell)
        }
    },
    mounted() {
        this.fetchData()
    // this.$root.$on('bv::dropdown::show', bvEvent => {
    //   console.log('Dropdown is about to be shown', bvEvent)
    // })
    },
    computed : {
        Text(){
            if(this.filier_id)
                return this.filier_label
            return "Select Filier"
        },
        
    }
}
</script>

<style>
.drop{
    text-align: center;
    width: auto;
}
.Title
{
    display: table-caption;
    text-align: center;
    font-weight: bold;
    font-size: larger;
}
.Table
{
    display: table;
    margin-bottom:10px;
}
.Heading
{
    display: table-row;
    font-weight: bold;
    text-align: center;
}
.Row
{
    display: table-row;
    min-width: 100px;
    height:100px;
}
.Cell
{
    display: table-cell;
    border: solid;
    border-width: thin;
    height: 80px;
    text-align: center;
    margin: auto;
    min-width: 260px;
}
.Cell:hover{
    background-color: #dee2e6;
}
.CellDays{
    display: table-cell;
    border: solid;
    border-width: thin;
    height: 50px;
    text-align: center;
    margin: auto;
    min-width: 100px;
    vertical-align: middle
}
.EmptyCell{
    display: table-cell;
    min-width: 20px;
}
</style>