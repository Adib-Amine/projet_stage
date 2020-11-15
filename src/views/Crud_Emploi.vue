<template>
    <div class="container">
        <div v-for="filier in this.info.data" :key="filier.id">
        <b-dropdown 
            text="Select Filier" block variant="primary" class="m-2" menu-class="w-100"
            >
            <b-dropdown-item href="#">{{filier.title}}</b-dropdown-item>
            <b-dropdown-item href="#">BDCC1</b-dropdown-item>
            <b-dropdown-item href="#">BDCC2</b-dropdown-item>
            <b-dropdown-item href="#" disabled>GLSID1</b-dropdown-item>
            <b-dropdown-item href="#">GLSID2</b-dropdown-item>
        </b-dropdown>
        </div>
        <div class="row">
        <div class="Table">
             <div class="Title">
                    <div>BDCC</div>
                </div>
            <div class="Heading">
                <div class="EmptyCell col-xs">
                    <div class="box"></div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">8h30 à 10h30</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">10h30 à 12h30</div>
                </div>
                <div class="EmptyCell col-xs">
                    <div class="box"></div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">14h à 16h</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">16h à 18h </div>
                </div>
            </div>
            <div class="Row">
                <div class="Cell   col-xs">
                    <div class="box">Lundi</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">
                        <div> Programmation Orientée Objet Java </div>
                        <div> (48) </div> 
                        <div>M. NAJI </div>
                        <div> S. 74 </div>
                    </div>
                </div>
                <div class="Cell col-xs">
                    <div> Programmation Orientée Objet Java </div>
                    <div> (48) </div> 
                    <div>M. NAJI </div>
                    <div> S. 74 </div>
                </div>
                <div class="EmptyCell col-xs">
                    <div class="box"></div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Gestion de la <br> production et de la <br> qualité (28) <br> M. JAMMOU</div>
                </div>
            </div>
            <div class="Row">
                <div class="Cell   col-xs">
                    <div class="box">Mardi</div>
                </div>
                <div class="Cell col-xs">
                    <div> Programmation Orientée Objet Java </div>
                    <div> (48) </div> 
                    <div>M. NAJI </div>
                    <div> S. 74 </div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="EmptyCell col-xs">
                    <div class="box"></div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
            </div>
            <div class="Row">
                <div class="Cell   col-xs">
                    <div class="box">Mercredi</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="EmptyCell col-xs">
                    <div class="box"></div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
            </div>
            <div class="Row">
                <div class="Cell   col-xs">
                    <div class="box">Jeudi</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="EmptyCell col-xs">
                    <div class="box"></div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
            </div>
            <div class="Row">
                <div class="Cell   col-xs">
                    <div class="box">Vendredi</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="EmptyCell col-xs">
                    <div class="box"></div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
            </div>
            <div class="Row">
                <div class="Cell   col-xs">
                    <div class="box">Samedi</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="EmptyCell col-xs">
                    <div class="box"></div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
                </div>
                <div class="Cell col-xs">
                    <div class="box">Programmation Orientée Objet <br>Java (48) <br> M. NAJI <br>S. 74</div>
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
        }
    },
    methods : {
        async fetchData(){
            axios
            .get("http://localhost:8000/filiers")
            .then(response => (this.info = response))
        },
    },
    mounted() {
        this.fetchData()
    // this.$root.$on('bv::dropdown::show', bvEvent => {
    //   console.log('Dropdown is about to be shown', bvEvent)
    // })
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
        height:120px;
    }
    .Cell
    {
        display: table-cell;
        border: solid;
        border-width: thin;
        /* padding-left: 5px; */
        /* padding-right: 5px; */
        height: 80px;
        text-align: center;
        margin: auto;
        min-width: 120px;
    }
    /* .box {
        margin: auto;
    } */
    .EmptyCell{
        display: table-cell;
        width: 5px;
    }
    .HeaderTable{
        display:block;
    }
</style>