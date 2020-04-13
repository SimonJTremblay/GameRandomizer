<template>
    <section class="block">
        <b-field grouped >
            <b-field>
                <b-autocomplete placeholder="Player"
                    icon-pack="fas"
                    clearable
                    icon="user"
                    :data="filteredFriends"
                    v-model="dataName"
                    field="name"
                    @select=" option => $emit('input', option)">
                </b-autocomplete>
            </b-field>
        </b-field>
    </section>
</template>

<script>
export default {
    props: ['value','friendList'],
    data(){
        return{
            dataName:''
        }
    },
    computed:{
        filteredFriends(){
            return this.friendList.filter ( option => {
                return option.name
                    .toString()
                    .toLowerCase()
                    .includes(this.dataName.toLowerCase())
            })
        }
    }
}
</script>