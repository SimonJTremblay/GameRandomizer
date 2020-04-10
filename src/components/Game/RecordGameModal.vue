<template>
    <section>
        <div class="container">
            <form>
                <b-field label="Select Game">
                    <b-select placeholder="Select a game" v-model="selectedGame">
                        <option 
                            v-for="(game,index) in collection"
                            :key="index"
                            :value="game"
                            >
                            {{ game.title }}
                        </option>
                    </b-select>
                </b-field>
            </form>
            <div v-if="selectedGame">
                <p>NbPlayers:  {{ selectedGame.players }}</p>
                <div class="block">
                    <b-radio 
                        v-for="n in playersRange" 
                        :key="n"
                        v-model="selectedNumberOfPlayers"
                        name="name"
                        :native-value="n + (selectedGame.players.min - 1)"
                    >
                    {{ n + (selectedGame.players.min - 1) }}
                    </b-radio>
                </div>
                <p class="content"> #players:  {{ selectedNumberOfPlayers }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        game:{
          type: Object,
        }
    },  // props
    data: function() {
        return {
            collection:
            [
                {
                    title: 'Smash up',
                    publishers: 'Alderac Entertainment Group',
                    players: {
                        min:2,
                        max:5
                    },
                    gameLength: '60-90',
                    complexity: '3/5'
                },
                {
                    title: 'Legendary',
                    publishers: 'Upper Deck Entertainment',
                    players: {
                        min:1,
                        max:5
                    },
                    gameLength: '30-60',
                    complexity: '2/5'
                },
                {
                    title: 'Ankh: Gods of Egypt',
                    publishers: 'CMON Limited',
                    players: {
                        min:2,
                        max:5
                    },
                    gameLength: 'N/A',
                    complexity: '4/5'
                }
            ],
            selectedGame: '',
            selectedNumberOfPlayers: -1
        };
    },  // data
    computed:{
        playersRange(){
            return this.selectedGame.players.max - this.selectedGame.players.min + 1;   // inclusive of max number
        }
    },  // computed
    watch: {
        selectedGame(){
            this.selectedNumberOfPlayers = this.selectedGame.players.min;
        }
    }
}
</script>

<style scoped>
.container{
    background: lightcoral;
}

</style>