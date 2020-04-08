<template>
  <div id="app" class="has-navbar-fixed-top">
    <app-header style="marginBottom: 20px"/>
    <app-game-collection />
  </div>
</template>

<script>
import Header from './components/sticky/Header'
import Collection from './components/Game/Collection'

export default {
  name: 'App',
  components:{
    'app-header': Header,
    'app-game-collection': Collection
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
