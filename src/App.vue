<template>
  <div id="app" class="has-navbar-fixed-top">
    <app-header style="marginBottom: 20px" @recordGame="isComponentModalActive = true"/>
        <b-modal :active.sync="isComponentModalActive"
                  has-modal-card
                  trap-focus
                  aria-role="dialog"
                  aria-modal>
            <app-record-game-modal />
        </b-modal>
    <!-- component matched by the route will render here -->
    <router-view></router-view>
    <button @click="populateState">populate State</button>
    <button @click="logState">log State</button>
  </div>
</template>

<script>
import Header from './components/sticky/Header'
import RecordGameModal from './components/Game/RecordGameModal'
import {mapActions} from 'vuex'
import { TEST_USER_ID } from './constants'
import collectionApi from './axios/collectionFacade'

export default {
  name: 'App',
  components:{
    'app-header': Header,
    'app-record-game-modal': RecordGameModal,
  },
  data() {
    return {
      isComponentModalActive: false,
    }
  },
  methods: {
    async populateState(){
      this.$store.dispatch('setUserId', TEST_USER_ID)
      const collection = await collectionApi.getGameCollection();
      this.$store.dispatch('setGameList', collection.gameList)
      console.log('done');
    },
    logState(){
      console.log(`userid: ${this.$store.state.userId} gamelist: ${this.$store.state.gameList}`)
    },
    ...mapActions([
      'setGameList',
      'setUserId',
    ])
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
