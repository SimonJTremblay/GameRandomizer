<template>
    <div class="columns is-multiline is-centered">
        <app-game-card 
            class="column is-narrow"
            v-for="(game,index) in collection"
            :key="index"
            :game="game"
            @deleteGame="deleteGameFromCollection"
        />
    </div>
</template>

<script>
import GameCard from '../components/Game/GameCard'
import CollectionApi from '../axios/collectionFacade.js'

export default {
    data: function() {
        return {
            collection: null,
        }
    },
    components:{
        'app-game-card': GameCard,
    },
    methods:{
        deleteGameFromCollection(game){
            alert(`${game.title} has been deleted`)
        },
        async getCollection(){
           const user = await CollectionApi.getGameCollection(); 
           this.collection = user.gameList;
        }
    },  // methods
    async created(){
        this.getCollection();
    },  // created

}
</script>

