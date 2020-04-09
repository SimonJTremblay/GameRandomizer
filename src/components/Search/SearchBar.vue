<template>
    <section>
        <b-field label="Search for a Game..." custom-class="is-large" ></b-field>
        <b-field grouped>
            <b-input 
                placeholder="Search..."
                type="search"
                icon="search"
                size="is-large"
                v-model="itemToSearch"
                expanded>
            </b-input>
            <p class="control">
                <button class="button is-primary is-large" @click="searchForItem">Search</button>
            </p>
        </b-field>
    </section>
</template>

<script>
export default {
    data: function() {
        return{
            itemToSearch: ''
        };
    },
    methods:{
        searchForItem(){
            alert(`${this.itemToSearch} was searched!`);
        }
    },
    
}
</script>

<style scoped>

</style>>
