<template>
    <div class="container bg-white text-dark">
        <b-dropdown :text="Text" block variant="primary" class="m-2" menu-class="w-100">
        <div v-for="filier in this.filier_list.data" :key="filier.id">
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

            <div class="Row" v-for="(items, dayOfWeek, i) in emploi" :key="i+1">
                <div class="CellDays col-xs">
                    <div class="box">{{Days[i]}}</div>
                </div>
                <div class="col-xs" :class="classCell(j+1)"
                    v-for="(item, j) in items.slice(0,2).concat(null).concat(items.slice(2))" :key="j+1"
                    v-on:click="j+1===3?'':selectedTimeslot(item)"
                    :style="{ color: item&&item.textColor?item.textColor:'#000', 'background-color': item&&item.color?item.color:'#fff' }">
                    <div class="box">
                        <span v-if="item">
                            {{ item.title }}<br>
                            {{ item.profId }}
                        </span>
                    </div>
                    <div class="box" v-if="j==2"></div>
                </div>
            </div>
            <!-- <div class="Row" v-for="j in 6" :key="j">
                <div class="CellDays col-xs">
                    <div class="box">{{Days[j-1]}}</div>
                </div>
                <div class="col-xs" :class="classCell(i)" v-for="i in 5" :key="i">
                    <div class="box" v-if="i != 3" v-on:click="selectedTimeslot(j,i)">
                        <span v-if="cellEmploi(j, i) !== undefined">
                            {{ cellEmploi(j, i).title }}<br>
                            {{ cellEmploi(j, i).profId }}
                        </span>
                    </div>
                    <div class="box" v-else>
                    </div>
                </div>
            </div> -->
        </div>        
        </div>
        <AddTimeslot ref="addtimeslot"/>
        <!-- <TimeSlot ref="ShowTimeTable" v-show="test" @send-emploi="testFct" /> -->
        <!-- <h1>
            {{emploi[0].title}}
        </h1> -->
    </div>
</template>

<script>
import axios from 'axios'
import AddTimeslot from '../components/layout/AddTimeslot.vue'
// import TimeSlot from '../components/layout/TableTimeslot.vue'
export default {
    components : {
        AddTimeslot
        // TimeSlot
    },
    data(){
        return{
            filier_list : "",
            filier_id : 1,
            filier_label : null,
            filier_title : null,
            Days : ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
            cellStatus : true,
            module : {
                title : "ogrammation Orientée Objet Java",
                nbr : "48",
                prof : "M. NAJI",
                salle : "75"
            },
            module1 : {
                title : "",
                nbr : "",
                prof : "",
                salle : ""
            },
            emploi : [],
            // test : false

        }
    },
    methods : {
        async fetchFilierList(){
            axios
            .get("http://localhost:8000/filiers",this.$myauth.getBearer())
            .then(response => (this.filier_list = response))
        },
        async fetchEmploi(filier_id){
            // axios
            // .get("http://localhost:8000/timeslots/filier/"+filier_id)
            // .then(response => (this.emploi  =response))

            const res = await axios.get("http://localhost:8000/timeslots/filier/"+filier_id)
            this.emploi  = res.data
        },
        async selectedFilier(filier){
            this.filier_id = filier.id
            this.filier_label = filier.label
            this.filier_title = filier.title
            await this.fetchEmploi(filier.id)
            // this.$refs.ShowTimeTable.show(res)
            // this.test = true

            // console.log(this.emploi)
        },
        // async sendEmploi(){
        //     const res = await this.fetchEmploi(2)
        //     this.emploi = res
        //     this.$emit('send-emploi',res)
        // },
        classCell(ind){
            if(ind != 3)
                return "Cell"
            return "EmptyCell"
        },
        selectedTimeslot(item){
            if(!item.id)
                this.$refs.addtimeslot.showAddTimeslot();
            //console.log("row : ",row," cell: ",cell)
        },
        cellEmploi(row, cell) {
            //row=day of week
            //cell=1,2,4,5
            let timeslotsMap = {
                1: "08:30:00",
                2: "10:30:00",
                4: "14:00:00",
                5: "16:00:00",
            }
            let dayOfWeek = row
            let timeslot = timeslotsMap[cell]
            let emploi = this.emploi.find(entry => {
                return entry.daysOfWeek === dayOfWeek && timeslot === entry.startTime
            })
            return emploi
        }
    },
    mounted() {
        this.fetchFilierList()
        // await this.fetchEmploi(2)
    // this.$root.$on('bv::dropdown::show', bvEvent => {
    //   console.log('Dropdown is about to be shown', bvEvent)
    // })
    },
    async created(){
        await this.fetchEmploi(2)
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