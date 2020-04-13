<template>
    <section>
        <div class="container">
            <form>
                <b-field label="Select Game">
                    <b-select placeholder="Select a game" v-model="selectedGame" expanded>
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
                <label for="nbPlayers">Number of players:</label>
                <div class="block">
                    <b-radio 
                        v-for="n in playersRange" 
                        :key="n"
                        v-model="selectedNumberOfPlayers"
                        name="nbPlayers"
                        :native-value="n + (selectedGame.players.min - 1)"
                    >
                    {{ n + (selectedGame.players.min - 1) }}
                    </b-radio>
                </div>
                <p class="content"> #players:  {{ selectedNumberOfPlayers }}</p>
                <div class="block">
                    <b-field grouped v-for="n in selectedNumberOfPlayers" :key="n">
                        <app-friend-picker v-model="selectedFriends[n-1]" :friendList="friends"> </app-friend-picker>
                        <b-field expanded>
                            <b-input 
                                placeholder="Score"
                                type="number"
                                v-model.number="score[n-1]">
                            </b-input>
                        </b-field>
                    </b-field>
                    <p class="content">Players: {{selectedFriends}}</p>
                    <p class="content">Score: {{score}}</p>
                </div>
                <b-field>
                    <b-datepicker
                        ref="datepicker"
                        expanded
                        editable
                        placeholder="Select a date">
                    </b-datepicker>
                    <b-button
                        @click="$refs.datepicker.toggle()"
                        icon-left="calendar-day"
                        type="is-primary" />
                </b-field>
                <b-button class="is-primary">Save</b-button>
            </div>
        </div>
    </section>
</template>

<script>
import FriendPicker from './FriendPicker'
export default {
    components: {
        'app-friend-picker': FriendPicker,
    },
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
            friends:
            [
                {
                    name:'Maxime',
                    score: 0
                },
                {
                    name:'Alexandra',
                    score: 0
                },
                {
                    name:'Jérémy',
                    score: 0
                },
            ],
            selectedFriends:[],
            score:[],
            selectedGame: '',
            selectedNumberOfPlayers: -1
        };
    },  // data
    computed:{
        playersRange(){
            return this.selectedGame.players.max - this.selectedGame.players.min + 1;   // inclusive of max number
        },
    },  // computed
    watch: {
        selectedGame(){
            this.selectedNumberOfPlayers = this.selectedGame.players.min;
        },
        selectedNumberOfPlayers(){
            this.selectedFriends = this.selectedFriends.slice(0,this.selectedNumberOfPlayers)
        }
    }
}
</script>

<style scoped>
.container{
    background: lightcoral;
}

</style>