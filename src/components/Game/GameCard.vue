<template>
  <div class="card">
     <b-modal :active.sync="isComponentModalActive"
              has-modal-card
              trap-focus
              aria-role="dialog"
              aria-modal>
        <app-record-game-modal :game="game"/>
      </b-modal>
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="game.media.image" alt="Image is not available" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <!-- <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" /> -->
            <vue-fontawesome :icon="['fas', 'fist-raised']" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ game.title }}</p>
          <p class="subtitle is-6">{{ game.yearPublished }}</p>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
            <vue-fontawesome :icon="['fas', 'users']" />
            {{ game.players.min }} - {{ game.players.max }}
        </div>
        <div class="column">
            <vue-fontawesome :icon="['fas', 'hourglass']" />
            {{ game.playtime.min === game.playtime.max ? `${game.playtime.min}`: `${game.playtime.min} - ${game.playtime.max}`}}
        </div>
        <div class="column">
            <vue-fontawesome :icon="['fas', 'skull']" />
            {{ game.bggId }}
        </div>
      </div>
      <div class="buttons is-centered">
        <b-button 
          type="is-primary"
          icon-left="plus-square"
          @click="isComponentModalActive = true">
          Record
        </b-button>
        <b-button type="is-danger" icon-left="trash" @click="deleteGame">Delete</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import RecordGameModal from '../Game/RecordGameModal'

export default {
    components: {
      'app-record-game-modal': RecordGameModal
    },
    props: {
      game:{
          bggId:   Number,
          title:  {type: String, required:true},
          yearPublished: Number ,
          media:{
              thumbnail: String,
              image: String
          },
          players:{
              min: {type: Number, min: 0},
              max: {type: Number}
          },
          playtime:{
              min: {type: Number, min: 0},
              max: {type: Number}
          },
          expansions: [{id: Number, value: String, owned: {type: Boolean, default: false} }],    
          categories: [{id: Number, value: String}],
          mechanics:  [{id: Number, value: String}],
      }
    }, // /props
    methods:{
      deleteGame(){
        this.$emit('deleteGame', this.game)
      }
    }, // /methods
    data(){
      return{
        isComponentModalActive: false
      }
    } // data
};
</script>

<style scoped>
    .card{
        width: 300px;
        height: auto;
    }
</style>