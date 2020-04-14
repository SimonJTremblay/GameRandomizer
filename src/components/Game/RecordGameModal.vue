<template>
    <section>
        <div class="container">
            <form>
                <section v-if="errors.length" class="container">
                    <b>Please correct the following error(s):</b>
                    <ul>
                        <li v-for="(error, index) in errors" :key="index"> {{error}}</li>
                    </ul>
                </section>
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
                    </div>
                    <b-field>
                        <b-datepicker
                            ref="datepicker"
                            v-model="myDate"
                            expanded
                            editable
                            placeholder="Select a date">
                        </b-datepicker>
                        <b-button
                            @click="$refs.datepicker.toggle()"
                            icon-left="calendar-day"
                            type="is-primary" />
                    </b-field>
                    <b-button @click.prevent="checkForm" class="is-primary">Save</b-button>
                </div>
            </form>
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
            myDate: new Date(),
            selectedGame: '',
            selectedNumberOfPlayers: -1,
            errors:[],
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
    },
    methods:{
        checkForm: function (e) {
            this.errors = [];

            if(!this.selectedGame){
                this.errors.push("Select a game!");
            }
            if(this.score.length !== this.selectedNumberOfPlayers) {
                this.errors.push("Enter the scores");
            }
            if(this.selectedFriends.length !== this.selectedNumberOfPlayers) {
                this.errors.push("Enter all players.");
            }

            if (!this.errors.length) {
                alert("all good!")
                return true;
            }

            e.preventDefault();
        }
    },  // methods
}
</script>

<style scoped>
.container{
    background: lightcoral;
}

</style>