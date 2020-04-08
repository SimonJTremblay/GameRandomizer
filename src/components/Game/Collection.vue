<template>
    <div class="columns is-multiline is-centered">
        <app-game-card 
            class="column is-narrow"
            v-for="(game,index) in collection"
            :key="index"
            :game="game"
        />
    </div>
</template>

<script>
import GameCard from './GameCard.vue'
export default {
    data: function() {
        return {
            collection:
            [
                {
                    title: 'Smash up',
                    publishers: 'Alderac Entertainment Group',
                    nbPlayers: '2-4',
                    gameLength: '60-90',
                    complexity: '3/5'
                },
                {
                    title: 'Legendary',
                    publishers: 'Upper Deck Entertainment',
                    nbPlayers: '1-5',
                    gameLength: '30-60',
                    complexity: '2/5'
                },
                {
                    title: 'Ankh: Gods of Egypt',
                    publishers: 'CMON Limited',
                    nbPlayers: '2-5',
                    gameLength: 'N/A',
                    complexity: '4/5'
                },
                {
                    title: 'Smash up',
                    publishers: 'Alderac Entertainment Group',
                    nbPlayers: '2-4',
                    gameLength: '60-90',
                    complexity: '3/5'
                },
                {
                    title: 'Legendary',
                    publishers: 'Upper Deck Entertainment',
                    nbPlayers: '1-5',
                    gameLength: '30-60',
                    complexity: '2/5'
                },
                {
                    title: 'Ankh: Gods of Egypt',
                    publishers: 'CMON Limited',
                    nbPlayers: '2-5',
                    gameLength: 'N/A',
                    complexity: '4/5'
                },
            ]
        };
    },
    components:{
        'app-game-card': GameCard,
    },    
}
</script>

