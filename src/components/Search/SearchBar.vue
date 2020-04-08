<template>
    <section>
        <b-field label="Search for a Game..." custom-class="is-large" ></b-field>
        <b-field grouped>
            <b-input 
                placeholder="Search..."
                type="search"
                icon="search"
                size="is-large"
                expanded>
                {{ searchItem}}
            </b-input>
            <p class="control">
                <button class="button is-primary is-large">Search</button>
            </p>
        </b-field>
    </section>
</template>

<script>
export default {
    data: function() {
        return{
            searchItem: ''
        };
    }
    
}
</script>

<style scoped>

</style>>
