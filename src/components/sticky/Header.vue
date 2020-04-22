<template>
    <b-navbar 
        type="is-dark"
        class="is-spaced"
        >
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ name:'Home' }">
                <img
                    src="@/assets/logo.png"
                    alt="Pocket Rocket is a boardgame collection and randomizer management app"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
                <router-link :to="{ name: 'Home'}" tag="b-navbar-item">
                        Home
                </router-link>
                <router-link :to="{ name: 'Search'}" tag="b-navbar-item">
                        Search
                </router-link>
                <router-link :to="{ name: 'Collection'}" tag="b-navbar-item">
                        Collection
                </router-link>
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