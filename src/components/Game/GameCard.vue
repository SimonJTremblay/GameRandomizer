<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="../../assets/logo.png" alt="Placeholder image" />
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
          <p class="subtitle is-6">{{ game.publishers }}</p>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
            <vue-fontawesome :icon="['fas', 'users']" />
            {{ game.nbPlayers }}
        </div>
        <div class="column">
            <vue-fontawesome :icon="['fas', 'hourglass']" />
            {{ game.gameLength }}
        </div>
        <div class="column">
            <vue-fontawesome :icon="['fas', 'skull']" />
            {{ game.complexity }}
        </div>
      </div>
      <div class="buttons is-centered">
        <b-button type="is-primary" icon-left="plus-square">Record</b-button>
        <b-button type="is-danger" icon-left="trash" @click="deleteGame">Delete</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
      game:{
          type: Object,
          default: function() {
              return{
                  title: 'N/A',
                  publishers: 'N/A',
                  nbPlayers: 'N/A',
                  gameLength: 'N/A',
                  complexity: 'N/A',                
              };
          }
      }
    }, // /props
    methods:{
      deleteGame(){
        this.$emit('deleteGame', this.game)
      }
    }, // /methods
};
</script>

<style scoped>
    .card{
        width: 300px;
        height: auto;
    }
</style>