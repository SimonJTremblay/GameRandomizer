<template>
    <section>
        <b-field label="Search for a Game..." custom-class="is-large" ></b-field>
        <b-field grouped>
            <b-input 
                placeholder="Search..."
                type="search"
                icon="search"
                size="is-large"
                v-model="itemToSearch"
                expanded>
            </b-input>
            <p class="control">
                <button class="button is-primary is-large" @click="searchForItem">Search</button>
            </p>
        </b-field>
        <div class="container" v-if="searchResult">
            <b-field v-if="selectedGame" grouped>
                <button class="button field is-danger" @click="selectedGame = null">
                    <b-icon icon="times"></b-icon>
                </button>
                <button class="button field is-primary" @click="addGameToLibrary">
                    <span>Add</span>
                </button>
                <p class="control">
                    Selected game: {{ selectedGame.name._attributes.value }}
                </p>
            </b-field>
            <b-table class="table"
                :data="searchResult"
                :columns="columns"
                :selected.sync="selectedGame">
            <template v-slot:empty>
                Oh no!, nothing was found!
            </template>
            </b-table>
        </div>
    </section>
</template>

<script>
import bggApi from '../axios/boardgamegeekFacade'
export default {
    data() {
        return{
            itemToSearch: '',
            searchResult:null,
            selectedGame: null,
            columns:[
                {
                    field: 'name._attributes.value',
                    label:'Name'
                },
                {
                    field: 'yearpublished._attributes.value',
                    label:'Year Published',
                    numeric: true
                }
            ]
        };
    },
    methods:{
        async searchForItem(){
            let res = await bggApi.GetSearchItem(this.itemToSearch);
            this.searchResult = res.items._attributes.total !== "0" ? res.items.item: [];
        },
        addGameToLibrary(){
            console.log(`${this.selectedGame.name._attributes.value} was added.`)
        }
    },    
}
</script>