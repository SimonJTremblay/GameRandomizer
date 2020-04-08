<template>
  <div id="app" class="has-navbar-fixed-top">
    <app-header style="marginBottom: 20px"/>
    <!-- <app-game-collection /> -->
    <div class="container">
      <app-search-bar />
    </div>
  </div>
</template>

<script>
import Header from './components/Sticky/Header'
//import Collection from './components/Game/Collection'
import SearchBar from './components/Search/SearchBar'

export default {
  name: 'App',
  components:{
    'app-header': Header,
    //'app-game-collection': Collection,
    'app-search-bar': SearchBar,
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
}
</style>
