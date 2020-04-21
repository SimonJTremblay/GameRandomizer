<template>
    <b-navbar 
        type="is-dark"
        class="is-spaced"
        >
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                <router-link :to="{ name: 'Home'}">
                    Home
                </router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link :to="{ name: 'Search'}">
                    Search for Games
                </router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link :to="{ name: 'Collection'}">
                    Collection
                </router-link>
            </b-navbar-item>
            <div class="buttons">
                <a class="button is-primary" @click="recordGame">
                    <strong>Record a Game</strong>
                </a>
            </div>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default { 
    methods:{
        recordGame() {
            this.$emit('recordGame');
        }
    }  
}
</script>