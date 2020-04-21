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
  </div>
</template>

<script>
import Header from './components/Sticky/Header'
import RecordGameModal from './components/Game/RecordGameModal'

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
