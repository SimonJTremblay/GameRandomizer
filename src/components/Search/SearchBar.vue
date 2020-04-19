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
        <div v-if="searchResult.length">
                <h4>{{ searchResult.length }} records</h4>
            Selected game: {{ selectedGame.name._attributes.value }}
            <b-table class="table"
                :data="searchResult"
                :columns="columns"
                :selected.sync="selectedGame">
            </b-table>
        </div>
    </section>
</template>

<script>
import bggApi from '../../axios/boardgamegeekFacade'
export default {
    data() {
        return{
            itemToSearch: '',
            searchResult:[],
            selectedGame:'',
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
            this.searchResult = res.items.item;
        }
    },
    
}
</script>